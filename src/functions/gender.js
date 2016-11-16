'use strict';

import { getDataSet } from '../config';
import { pick } from '../utilities/random';

const GENDER = [
    0, // female
    1  // male
];

export function gender(isNum){
    let g = pick(GENDER);
    if(isNum) return g;
    else return getDataSet().gender[g];

}
