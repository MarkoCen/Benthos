'use strict';

import { getDataSet } from '../config';
import { pick } from '../utilities/random';

export function lastName(){
    let dataset = getDataSet();
    return pick(dataset.lastNames);
}