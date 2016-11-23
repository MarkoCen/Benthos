'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.name = name;

var _firstName = require('./firstName');

var _lastName = require('./lastName');

function name(gender) {
    return (0, _firstName.firstName)(gender) + ' ' + (0, _lastName.lastName)();
}