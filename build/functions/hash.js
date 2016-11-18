'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hash = hash;

var _string = require('./string');

function hash(str) {
    str = str || (0, _string.string)(25, '[0-9a-zA-Z]');
    var hash = 0,
        i = void 0,
        chr = void 0,
        len = void 0;

    for (i = 0, len = str.length; i < len; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
}