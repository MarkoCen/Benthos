'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseFormat = parseFormat;
exports.tokenize = tokenize;
var convertStr = function convertStr(str, scope) {
    if (str == null) return str;
    if (str === 'true') return true;
    if (str === 'false') return false;
    if (!isNaN(str)) return +str;
    if (scope[str]) return scope[str];
    return str.toString();
};

function parseFormat(formatStr) {
    if (formatStr == undefined) return 10;
    switch (formatStr) {
        case 'hex':
            return 16;
        case 'oct':
            return 8;
        case 'bin':
            return 2;
        default:
            return parseInt(formatStr, 10);
    }
};

function tokenize(template, scope) {
    var regex = /#\{(.*?)}/g;
    var commands = [];
    var m = void 0;
    var p = 0;

    while ((m = regex.exec(template)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        if (m[1]) {
            commands.push({
                value: template.substring(p, m.index),
                skip: true
            });
            p = m.index + m[0].length;
            var match = m[1];
            var command = match.trim();
            var name = /^(\w*)/.exec(command);
            var params = /\((.*?)\)/.exec(command);
            commands.push({
                name: name ? name[1] : '',
                parameters: params ? (params[1] || '').trim().split(',').map(function (p) {
                    return convertStr(p.trim(), scope);
                }) : []
            });
        }
    }

    if (p != template.length) commands.push({
        value: template.substring(p),
        skip: true
    });

    return commands;
};