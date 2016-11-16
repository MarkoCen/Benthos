'use strict';

import { real } from '../utilities/random';
import { parseFormat } from '../utilities/parser';

export function float(...args) {

    let pre, format;
    if(args.length == 0){
        pre = 2; format = 10;
    } else if(args.length == 1){
        pre = isNaN(args[0]) ? 2 : parseInt(args[0], 10);
        format = 10;
    } else{
        pre = parseInt(args[0], 10); format = parseFormat(args[1]);
    }

    return format == 10 ? real(pre) : real(pre).toString(format);
}