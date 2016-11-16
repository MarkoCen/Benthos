'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.phone = phone;

var _string = require('./string');

function phone(format) {
    var r = /(X+)/g;
    format = format || '(XXX)XXX-XXXX';
    return format.replace(r, function (match) {
        return (0, _string.string)(match.length, '[0-9]');
    });
}