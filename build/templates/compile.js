'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compile = compile;

var _index = require('../functions/index');

var functions = _interopRequireWildcard(_index);

var _errors = require('../utilities/errors');

var _parser = require('../utilities/parser');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function compile(template, scope) {
    scope = scope || {};
    if (typeof template != 'string') throw (0, _errors.INVALID_TEMPLATE)(template);

    var token = (0, _parser.tokenize)(template, scope);

    token.commands.forEach(function (command) {
        if (!command.skip) {

            var ref = scope ? scope[command.name] || functions[command.name] : functions[command.name];

            if (ref == null) throw (0, _errors.NO_FUNCTION_FOUND_IN_TEMPLATE)(command.name, template);

            command.parameters.map(function (param) {
                if (param.$$scopeVar) {
                    return scope[param.name];
                } else {
                    return param;
                }
            });

            command.value = typeof ref != 'function' ? ref.toString() : ref.call.apply(ref, [functions].concat(_toConsumableArray(command.parameters)));
        }
    });

    return token.commands.length > 0 ? serialize(token.commands) : template;
}

var serialize = function serialize(commands) {
    return (0, _parser.mapStrTypes)(commands.map(function (p) {
        return p.value;
    }).join(''));
};