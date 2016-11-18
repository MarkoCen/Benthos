'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.schema = schema;

var _lodash = require('lodash.foreach');

var _lodash2 = _interopRequireDefault(_lodash);

var _parser = require('../utilities/parser');

var _errors = require('../utilities/errors');

var _index = require('../functions/index');

var functions = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isPrimitive = function isPrimitive(obj) {
    var types = ['number', 'string', 'null', 'undefined', 'boolean'];
    return types.indexOf(typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) > -1;
};

var isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) == '[object Object]';
};

var isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) == '[object Array]';
};

var parseSchemaTree = function parseSchemaTree(obj) {
    if (typeof obj == 'function') throw new Error('schema property does not allow function');

    if (isObject(obj)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                if (isPrimitive(obj[key])) {
                    if (typeof obj[key] == 'string') {
                        obj[key] = (0, _parser.tokenize)(obj[key]);
                    }
                } else {
                    obj[key] = parseSchemaTree(obj[key]);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    } else if (isArray(obj)) {
        obj.forEach(function (e, index) {
            if (isPrimitive(e)) {
                if (typeof e == 'string') {
                    obj[index] = (0, _parser.tokenize)(e);
                }
            } else {
                obj[index] = parseSchemaTree(e);
            }
        });
    }

    return obj;
};

function schema(obj) {
    if (!isObject(obj)) throw new Error('schema must be an plain object');

    return function (scope) {

        function loop(o) {
            var isArr = isArray(o);
            var result = isArr ? [] : {};
            (0, _lodash2.default)(o, function (value, itt) {
                if (isPrimitive(value)) result[itt] = value;else if (value.$$bsToken) {
                    (function () {
                        var r = [];
                        (0, _lodash2.default)(value.commands, function (command) {
                            if (!command.skip) {

                                var ref = scope ? scope[command.name] || functions[command.name] : functions[command.name];

                                if (ref == null) throw (0, _errors.NO_FUNCTION_FOUND_IN_TEMPLATE)(command.name);

                                var params = command.parameters.map(function (param) {
                                    if (param.$$scopeVar) {
                                        return scope[param.name];
                                    } else {
                                        return param;
                                    }
                                });

                                r.push(typeof ref != 'function' ? ref.toString() : ref.call.apply(ref, [functions].concat(_toConsumableArray(params))));
                            } else {
                                r.push(command.value);
                            }
                        });
                        result[itt] = (0, _parser.mapStrTypes)(r.join(''));
                    })();
                } else {
                    result[itt] = loop(value);
                }
            });
            return result;
        }

        return loop(this);
    }.bind(parseSchemaTree(obj));
}