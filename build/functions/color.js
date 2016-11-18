'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.color = color;

var _random = require('../utilities/random');

var rgbToHsl = function rgbToHsl(r, g, b) {
    var min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        delta = max - min,
        h = void 0,
        s = void 0,
        v = max;

    v = Math.floor(max / 255 * 100);
    if (max != 0) s = Math.floor(delta / max * 100);else return [0, 0, 0];

    if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else h = 4 + (r - g) / delta;

    h = Math.floor(h * 60);
    if (h < 0) h += 360;

    return [h, s, v];
};

var getHexNumber = function getHexNumber(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

var rgbToHex = function rgbToHex(r, g, b) {
    return '#' + (getHexNumber(r) + getHexNumber(g) + getHexNumber(b));
};

function color(format) {
    var r = (0, _random.number)(0, 256);
    var g = (0, _random.number)(0, 256);
    var b = (0, _random.number)(0, 256);

    switch (format) {
        case 'rgb':
            return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        case 'hsl':
            {
                var hsl = rgbToHsl(r, g, b);
                return 'hsl(' + hsl[0] + '%, ' + hsl[1] + '%, ' + hsl[2] + '%)';
            }
        case 'hex':
        default:
            return rgbToHex(r, g, b);
    }
}