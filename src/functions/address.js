'use strict';

import { string } from './string';
import { street } from './street';
import { country } from './country';

export function address() {
    let st = street();
    let ci = string(6, '[a-z]');
    ci = ci.charAt(0).toUpperCase() + ci.slice(1);
    let cty = country(false);
    let zip = string(6, '[0-9]');
    return `${st}, ${ci}, ${cty} ${zip}`;
}