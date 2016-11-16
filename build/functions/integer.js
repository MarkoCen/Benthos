'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.integer = integer;

var _random = require('../utilities/random');

var _parser = require('../utilities/parser');

function integer() {

    var min = 0,
        max = 100,
        format = 10,
        num = void 0;
    if (arguments.length == 0) {
        format = (0, _parser.parseFormat)();
    } else if (arguments.length == 1) {
        if (isNaN(arguments.length <= 0 ? undefined : arguments[0])) {
            format = (0, _parser.parseFormat)(arguments.length <= 0 ? undefined : arguments[0]);
        } else {
            max = arguments.length <= 0 ? undefined : arguments[0];
        }
    } else {
        max = arguments.length <= 1 ? undefined : arguments[1];min = arguments.length <= 0 ? undefined : arguments[0];format = (0, _parser.parseFormat)(arguments.length <= 2 ? undefined : arguments[2]);
    }

    num = (0, _random.number)(min, max);

    return format == 10 ? num : num.toString(format);
}