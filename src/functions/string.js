'use strict';

import { substring } from '../utilities/random';

const DEFAULT_STRING_POOL = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+|~-=\\`[]{};\':",./<>?';
const DEFAULT_FILTER = /[a-zA-Z0-9]/g;
const DEFAULT_LENGTH = 10;

export function string(length, regex){
    let r = regex instanceof RegExp ?
        regex
        : typeof regex == 'string' ?
            new RegExp(regex, 'g')
            : DEFAULT_FILTER;

    let s = '';
    let m;

    while (( m = r.exec(DEFAULT_STRING_POOL)) !== null) {
        if (m.index === r.lastIndex) {
            r.lastIndex++;
        }
        m.forEach(match => {
            s += match;
        });
    }

    return substring(s, length || DEFAULT_LENGTH);
}