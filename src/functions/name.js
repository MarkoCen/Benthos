'use strict';

import { firstName } from './firstName';
import { lastName } from './lastName';

export function name(gender) {
    return `${firstName(gender)} ${lastName()}`;
}