'use strict';

import { integer } from './integer';

export function date(...args) {
    let before, after;
    before = args[1] instanceof Date ?
        args[1]
        : new Date();
    after = args[0] instanceof Date ?
        args[0]
        : new Date(1970, 1, 1);

    if(after > before){
        let { before, after } = { after, before };
    }

    let dateTime = integer(after.getTime(), before.getTime());

    return new Date(dateTime);
}