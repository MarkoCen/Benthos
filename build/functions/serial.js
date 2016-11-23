'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serial = serial;

var _string = require('./string');

function serial() {
    var format = '***-**-****',
        regex = '[0-9]',
        r = /(\*+)/g;

    if (arguments.length == 1) {
        format = arguments.length <= 0 ? undefined : arguments[0];
    } else if (arguments.length > 1) {
        format = arguments.length <= 0 ? undefined : arguments[0];
        regex = arguments.length <= 1 ? undefined : arguments[1];
    }

    return format.replace(r, function (match) {
        return (0, _string.string)(match.length, regex);
    });
}