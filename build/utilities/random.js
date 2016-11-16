'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pick = pick;
exports.real = real;
exports.number = number;
exports.substring = substring;

var _randomJs = require('random-js');

var Random = _interopRequireWildcard(_randomJs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var engine = Random.engines.nativeMath;

function pick(array, pickNum) {
    return pickNum === undefined ? Random.pick(engine, array) : Random.sample(engine, array, parseInt(pickNum, 10));
}

function real(precision) {
    return parseFloat(Random.real(0, 1, false)(engine).toFixed(precision || 2));
}

function number(min, max) {
    return Random.integer(min || 0, max || 1)(engine);
}

function substring(string, length) {
    return Random.string(string)(engine, length);
}