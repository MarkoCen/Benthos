'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compile = compile;

var _index = require('../functions/index');

var funcs = _interopRequireWildcard(_index);

var _errors = require('../utilities/errors');

var _parser = require('../utilities/parser');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function compile(template, scope) {
    scope = scope || {};
    if (typeof template != 'string') throw (0, _errors.INVALID_TEMPLATE)(template);

    var commands = (0, _parser.tokenize)(template, scope);

    commands.forEach(function (command) {
        if (!command.skip) {
            var _funcs$command$name;

            if (!funcs[command.name]) throw (0, _errors.NO_FUNCTION_FOUND_IN_TEMPLATE)(command.name, template);
            command.value = (_funcs$command$name = funcs[command.name]).call.apply(_funcs$command$name, [null].concat(_toConsumableArray(command.parameters)));
        }
    });

    return commands.length > 0 ? serialize(commands) : template;
}

var serialize = function serialize(commands) {
    return commands.map(function (p) {
        return p.value;
    }).join('');
};