'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.date = date;

var _integer = require('./integer');

function date() {
    var before = void 0,
        after = void 0;
    before = (arguments.length <= 1 ? undefined : arguments[1]) instanceof Date ? arguments.length <= 1 ? undefined : arguments[1] : new Date();
    after = (arguments.length <= 0 ? undefined : arguments[0]) instanceof Date ? arguments.length <= 0 ? undefined : arguments[0] : new Date(1970, 1, 1);

    if (after > before) {
        var _after$before = { after: _after, before: _before },
            _before = _after$before.before,
            _after = _after$before.after;
    }

    var dateTime = (0, _integer.integer)(after.getTime(), before.getTime());

    return new Date(dateTime);
}