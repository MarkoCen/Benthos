'use strict';

import Identicon from 'identicon.js';
import { hash } from './hash';

export function identicon(hashStr, size) {
    hashStr = hashStr || hash();
    size = size || 200;

    let base64 = new Identicon(hashStr.toString(), size).toString();

    return `data:image/png;base64,${base64}`;
}