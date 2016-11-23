'use strict';

import { string } from './string';

export function phone(format) {
    let r = /(\*+)/g;
    format = format || '(***)***-****';
    return format.replace(r, match=>{
        return string(match.length, '[0-9]');
    })
}