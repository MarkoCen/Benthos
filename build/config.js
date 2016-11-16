'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLoc = setLoc;
exports.getDataSet = getDataSet;

var _index = require('./datasets/index');

var datasets = _interopRequireWildcard(_index);

var _errors = require('./utilities/errors');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var location = 'en';

function setLoc(loc) {
    if (!datasets[loc]) throw (0, _errors.NO_DATASET_FOUND)(loc);
    location = loc || 'en';
}

function getDataSet(newLocale) {
    var dataset = datasets[newLocale || location];
    if (dataset) return dataset;else throw (0, _errors.NO_DATASET_FOUND)(newLocale);
}