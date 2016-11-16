'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.street = street;

var _config = require('../config');

var _errors = require('../utilities/errors');

var _random = require('../utilities/random');

var _string = require('./string');

function street() {
    var location = (0, _config.getDataSet)().location;
    if (!location) throw (0, _errors.NO_LOCATION_FOUND)();

    var streetNumber = (0, _string.string)(3, '[0-9]');
    var streetName = (0, _string.string)(7, '[a-z]');
    var streetType = (0, _random.pick)(location.roadTypes);

    streetName = streetName.charAt(0).toUpperCase() + streetName.slice(1);

    return streetNumber + ' ' + streetName + ' ' + streetType;
}