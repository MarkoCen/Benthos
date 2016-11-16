'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.country = country;

var _config = require('../config');

var _errors = require('../utilities/errors');

var _random = require('../utilities/random');

function country(isCode) {
    var loc = (0, _config.getDataSet)().location;
    if (!loc) throw (0, _errors.NO_LOCATION_FOUND)();
    return (0, _random.pick)(isCode ? loc.countryCodes : loc.countries);
}