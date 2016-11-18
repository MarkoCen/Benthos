'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.boolean = boolean;

var _random = require('../utilities/random');

function boolean() {
    return (0, _random.pick)([true, false]);
}