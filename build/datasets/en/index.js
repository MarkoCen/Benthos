'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.en = undefined;

var _gender_data = require('./gender_data');

var _lastNames_data = require('./lastNames_data');

var _firstNames_data = require('./firstNames_data');

var _location_data = require('./location_data');

var en = exports.en = {
    gender: _gender_data.gender,
    lastNames: _lastNames_data.lastNames,
    firstNames: { male: _firstNames_data.male, female: _firstNames_data.female },
    location: _location_data.location
};