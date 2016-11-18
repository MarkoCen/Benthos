'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extend = extend;
function extend(name, fn) {
    var _this2 = this;

    if (typeof name == 'string' && typeof fn == 'function') {
        (function () {
            var _this = _this2;
            Object.defineProperty(_this, name, {
                enumerable: true,
                get: function get() {
                    return fn.bind(_this);
                }
            });
        })();
    }
}