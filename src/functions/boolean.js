'use strict';

import { pick } from '../utilities/random';

export function boolean() {
    return pick([true, false]);
}