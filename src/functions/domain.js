'use strict';

import { string } from './string';
import { pick } from '../utilities/random';

const domains = ['.com', '.net', '.org', '.info', '.biz', '.io'];

export function domain() {
    return string(5) + pick(domains)
}