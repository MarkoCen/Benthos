'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dateIn = dateIn;

var _random = require('../utilities/random');

function dateIn(scope) {
    var current = new Date(),
        before = void 0,
        after = void 0,
        c = {
            cYr: current.getFullYear(),
            cMn: current.getMonth(),
            cDt: current.getDate(),
            cDy: current.getDay(),
            cHr: current.getHours(),
            cMin: current.getMinutes(),
            cSec: current.getSeconds(),
            cMil: current.getMilliseconds()
        };

    if (scope == 'day') {
        before = new Date(c.cYr, c.cMn, c.cDt + 1).getTime() - 1;
        after = new Date(c.cYr, c.cMn, c.cDt - 1, 23, 59, 59, 999).getTime() + 1;
    } else if (scope == 'month') {
        before = new Date(c.cYr, c.cMn + 1).getTime() - 1;
        after = new Date(c.cYr, c.cMn - 1, 31, 23, 59, 59, 999).getTime() + 1;
    } else if (scope == 'year') {
        before = new Date(c.cYr + 1, 0, 1).getTime() - 1;
        after = new Date(c.cYr - 1, 11, 31, 23, 59, 59, 999).getTime() + 1;
    } else {
        var firstDay = c.cDt - c.cDy + (c.cDy == 0 ? -6 : 1);
        var lastDay = c.cDt + (c.cDy == 0 ? 0 : 6 - c.cDy) + 1;
        before = new Date(c.cYr, c.cMn, lastDay).getTime() - 1;
        after = new Date(c.cYr, c.cMn, firstDay).getTime() + 1;
    }

    return new Date((0, _random.number)(after, before));
}