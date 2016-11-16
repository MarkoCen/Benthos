'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.email = email;

var _string = require('./string');

var _domain = require('./domain');

function email(d) {
    return (0, _string.string)(10) + '@' + (d ? d : (0, _domain.domain)());
}