'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.float = float;

var _random = require('../utilities/random');

var _parser = require('../utilities/parser');

function float() {

    var pre = void 0,
        format = void 0;
    if (arguments.length == 0) {
        pre = 2;format = 10;
    } else if (arguments.length == 1) {
        pre = isNaN(arguments.length <= 0 ? undefined : arguments[0]) ? 2 : parseInt(arguments.length <= 0 ? undefined : arguments[0], 10);
        format = 10;
    } else {
        pre = parseInt(arguments.length <= 0 ? undefined : arguments[0], 10);format = (0, _parser.parseFormat)(arguments.length <= 1 ? undefined : arguments[1]);
    }

    return format == 10 ? (0, _random.real)(pre) : (0, _random.real)(pre).toString(format);
}