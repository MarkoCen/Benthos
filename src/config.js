'use strict';

import * as datasets from './datasets/index';
import { NO_DATASET_FOUND } from './utilities/errors';

let location = 'en';

export function setLoc(loc) {
    if(!datasets[loc]) throw NO_DATASET_FOUND(loc);
    location = loc || 'en';
}

export function getDataSet(newLocale){
    let dataset = datasets[newLocale || location];
    if(dataset) return dataset;
    else throw NO_DATASET_FOUND(newLocale);
}