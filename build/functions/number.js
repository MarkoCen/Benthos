'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.number = number;
var parseFormat = function parseFormat(formatStr) {
    if (formatStr == undefined) return 10;
    switch (formatStr) {
        case 'hex':
            return 16;
        case 'oct':
            return 8;
        case 'bin':
            return 2;
        default:
            return parseInt(formatStr, 10);
    }
};

function number() {

    var min = void 0,
        max = void 0,
        format = void 0,
        fixed = void 0;
    if (arguments.length == 0) {
        min = 0;max = 100;format = parseFormat();
    } else if (arguments.length == 1) {
        if (typeof (arguments.length <= 0 ? undefined : arguments[0]) == 'string') {
            min = 0;max = 100;format = parseFormat(arguments.length <= 0 ? undefined : arguments[0]);
        } else {
            min = 0;max = parseInt(arguments.length <= 0 ? undefined : arguments[0], 10);format = parseFormat();
        }
    } else if (arguments.length == 2) {
        if (typeof (arguments.length <= 0 ? undefined : arguments[0]) == 'string') {
            min = 0;max = 100;format = parseFormat(arguments.length <= 0 ? undefined : arguments[0]);
            fixed = arguments.length <= 1 ? undefined : arguments[1];
        }
    }
}