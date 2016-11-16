'use strict';

import { number } from '../utilities/random';
import { parseFormat } from '../utilities/parser';

export function integer(...args) {

    let min = 0, max = 100, format = 10, num;
    if(args.length == 0){
        format = parseFormat();
    } else if(args.length == 1){
        if(isNaN(args[0])){
            format = parseFormat(args[0]);
        }else{
            max = args[0];
        }
    } else {
        max = args[1]; min = args[0]; format = parseFormat(args[2]);
    }

    num = number(min, max);

    return format == 10 ? num : num.toString(format);
}