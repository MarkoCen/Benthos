'use strict';

import { number } from '../utilities/random';

export function ipv6() {
    let count = 7;
    let ipv6 = [];
    while(count >= 0){
        ipv6.push(`${number(0, 65535).toString(16)}`.slice(-4));
        count--;
    }
    return ipv6.join(':').toUpperCase();
}