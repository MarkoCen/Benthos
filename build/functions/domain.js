'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.domain = domain;

var _string = require('./string');

var _random = require('../utilities/random');

var domains = ['.com', '.net', '.org', '.info', '.biz', '.io'];

function domain() {
    return (0, _string.string)(5) + (0, _random.pick)(domains);
}