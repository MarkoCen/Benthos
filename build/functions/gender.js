'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gender = gender;

var _config = require('../config');

var _random = require('../utilities/random');

var GENDER = [0, // female
1 // male
];

function gender(isNum) {
    var g = (0, _random.pick)(GENDER);
    if (isNum) return g;else return (0, _config.getDataSet)().gender[g];
}