'use strict';

import { number } from '../utilities/random';

export function ipv4(){
    return `${number(0, 255)}.${number(0, 255)}.${number(0, 255)}.${number(0, 255)}`;
}