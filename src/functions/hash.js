'use strict';

import { string } from './string';

export function hash(str) {
    str = str || string(25, '[0-9a-zA-Z]');
    let hash = 0
        ,i
        ,chr
        ,len;

    for (i = 0, len = str.length; i < len; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}