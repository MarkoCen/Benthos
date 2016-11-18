'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.identicon = identicon;

var _identicon = require('identicon.js');

var _identicon2 = _interopRequireDefault(_identicon);

var _hash = require('./hash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function identicon(hashStr, size) {
    hashStr = hashStr || (0, _hash.hash)();
    size = size || 200;

    var base64 = new _identicon2.default(hashStr, size).toString();

    return 'data:image/png;base64,' + base64;
}