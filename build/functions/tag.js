'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tag = tag;

var _words = require('./words');

function tag(symbol) {
    symbol = symbol || '#';
    return '' + symbol + (0, _words.words)(1);
}