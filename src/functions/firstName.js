'use strict';

import { getDataSet } from '../config';
import { pick } from '../utilities/random';

export function firstName(gender){
    let dataset = getDataSet();
    let names = gender === undefined ?
        dataset.firstNames.male.concat(dataset.firstNames.female)
        : gender === 0 || gender === 'female' ?
            dataset.firstNames.female
            : dataset.firstNames.male;

    return pick(names);
}