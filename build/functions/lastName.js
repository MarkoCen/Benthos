'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lastName = lastName;

var _config = require('../config');

var _random = require('../utilities/random');

function lastName() {
    var dataset = (0, _config.getDataSet)();
    return (0, _random.pick)(dataset.lastNames);
}