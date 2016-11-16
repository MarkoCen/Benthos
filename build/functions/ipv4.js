'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ipv4 = ipv4;

var _random = require('../utilities/random');

function ipv4() {
    return (0, _random.number)(0, 255) + '.' + (0, _random.number)(0, 255) + '.' + (0, _random.number)(0, 255) + '.' + (0, _random.number)(0, 255);
}