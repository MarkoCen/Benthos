'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ipv6 = ipv6;

var _random = require('../utilities/random');

function ipv6() {
    var count = 7;
    var ipv6 = [];
    while (count >= 0) {
        ipv6.push(('' + (0, _random.number)(0, 65535).toString(16)).slice(-4));
        count--;
    }
    return ipv6.join(':').toUpperCase();
}