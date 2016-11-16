'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.string = string;

var _random = require('../utilities/random');

var DEFAULT_STRING_POOL = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+|~-=\\`[]{};\':",./<>?';
var DEFAULT_FILTER = /[a-zA-Z0-9]/g;
var DEFAULT_LENGTH = 10;

function string(length, regex) {
    var r = regex instanceof RegExp ? regex : typeof regex == 'string' ? new RegExp(regex, 'g') : DEFAULT_FILTER;

    var s = '';
    var m = void 0;

    while ((m = r.exec(DEFAULT_STRING_POOL)) !== null) {
        if (m.index === r.lastIndex) {
            r.lastIndex++;
        }
        m.forEach(function (match) {
            s += match;
        });
    }

    return (0, _random.substring)(s, length || DEFAULT_LENGTH);
}