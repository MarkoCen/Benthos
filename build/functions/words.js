'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.words = words;

var _config = require('../config');

var _random = require('../utilities/random');

var _errors = require('../utilities/errors');

function words(count) {
    count = count || 10;

    var dataSet = (0, _config.getDataSet)();
    if (!dataSet.text) throw (0, _errors.NO_TEXT_FOUND)();

    var w = (0, _random.pick)(dataSet.text, count);
    return w.join(' ');
}