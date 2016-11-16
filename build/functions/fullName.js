'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fullName = fullName;

var _firstName = require('./firstName');

var _lastName = require('./lastName');

function fullName(gender) {
    return (0, _firstName.firstName)(gender) + ' ' + (0, _lastName.lastName)();
}