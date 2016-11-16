'use strict';

import { firstName } from './firstName';
import { lastName } from './lastName';

export function fullName(gender) {
    return `${firstName(gender)} ${lastName()}`;
}