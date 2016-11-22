'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.image = image;

var _string = require('./string');

var IMAGE_HREF = 'https://unsplash.it';

function image() {
    var w = void 0,
        h = void 0;
    var id = (0, _string.string)(10, '[a-zA-Z0-9]');
    if (arguments.length == 0) {
        w = h = 500;
    } else if (arguments.length == 1) {
        w = h = parseInt(arguments.length <= 0 ? undefined : arguments[0], 10);
    } else {
        w = parseInt(arguments.length <= 0 ? undefined : arguments[0], 10);
        h = parseInt(arguments.length <= 1 ? undefined : arguments[1], 10);
    }

    return IMAGE_HREF + '/' + w + '/' + h + '/?random&id=' + id;
}