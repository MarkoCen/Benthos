'use strict';

import { string } from './string';

export function serial(...args) {
    let format = '***-**-****'
        ,regex = '[0-9]'
        ,r = /(\*+)/g;

    if(args.length == 1){
        format = args[0];
    } else if(args.length > 1){
        format = args[0];
        regex = args[1];
    }

    return format.replace(r, match=>{
        return string(match.length, regex);
    })
}