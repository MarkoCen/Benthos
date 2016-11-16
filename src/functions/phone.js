'use strict';

import { string } from './string';

export function phone(format) {
    let r = /(X+)/g;
    format = format || '(XXX)XXX-XXXX';
    return format.replace(r, match=>{
        return string(match.length, '[0-9]');
    })
}