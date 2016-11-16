'use strict';

import { string } from './string';
import { domain } from './domain';

export function email(d){
    return `${string(10)}@${ d ? d : domain() }`
}