'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.firstName = firstName;

var _config = require('../config');

var _random = require('../utilities/random');

function firstName(gender) {
    var dataset = (0, _config.getDataSet)();
    var names = gender === undefined ? dataset.firstNames.male.concat(dataset.firstNames.female) : gender === 0 || gender === 'female' ? dataset.firstNames.female : dataset.firstNames.male;

    return (0, _random.pick)(names);
}