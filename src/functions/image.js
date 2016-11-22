'use strict';

import { string } from './string';

const IMAGE_HREF = 'https://unsplash.it';

export function image(...args){
    let w, h;
    let id = string(10, '[a-zA-Z0-9]');
    if(args.length == 0){
        w = h = 500;
    }else if(args.length == 1){
        w = h = parseInt(args[0], 10);
    }else{
        w = parseInt(args[0], 10);
        h = parseInt(args[1], 10);
    }

    return `${IMAGE_HREF}/${w}/${h}/?random&id=${id}`;
}