'use strict';

import { string } from './string';
import { domain } from './domain';

export function email(d){
    return `${string(10, '[0-9a-zA-Z]')}@${ d ? d : domain() }`
}