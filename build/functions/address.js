'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.address = address;

var _string = require('./string');

var _street = require('./street');

var _country = require('./country');

function address() {
    var st = (0, _street.street)();
    var ci = (0, _string.string)(6, '[a-z]');
    ci = ci.charAt(0).toUpperCase() + ci.slice(1);
    var cty = (0, _country.country)(false);
    var zip = (0, _string.string)(6, '[0-9]');
    return st + ', ' + ci + ', ' + cty + ' ' + zip;
}