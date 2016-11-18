'use strict';

import { getDataSet } from '../config';
import { pick } from '../utilities/random';
import { NO_TEXT_FOUND } from '../utilities/errors';

export function words(count) {
    count = count || 10;

    let dataSet = getDataSet();
    if(!dataSet.text) throw NO_TEXT_FOUND();

    let w = pick(dataSet.text, count);
    return w.join(' ');
}