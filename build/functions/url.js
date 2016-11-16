'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.url = url;

var _domain = require('./domain');

function url() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        host = _ref.host,
        protocol = _ref.protocol,
        query = _ref.query,
        port = _ref.port,
        hash = _ref.hash,
        path = _ref.path;

    host = host || (0, _domain.domain)();
    protocol = protocol || 'http';
    port = port ? port[0] == ":" ? port : ":" + port : '';
    hash = hash ? hash[0] == '#' ? hash : '#' + hash : '';
    path = path ? path[0] == '/' ? path : '/' + path : '';

    var search = [];

    if (query) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(query)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var q = _step.value;

                search.push(q + '=' + encodeURI(query[q]));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    return protocol + '://' + host + port + path + hash + (search.length > 0 ? '?' + search.join('&') : '');
}