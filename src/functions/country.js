'use strict';

import { getDataSet } from '../config';
import { NO_LOCATION_FOUND } from '../utilities/errors';
import { pick } from '../utilities/random';

export function country(isCode) {
    let loc = getDataSet().location;
    if(!loc) throw NO_LOCATION_FOUND();
    return pick(isCode ? loc.countryCodes : loc.countries);
}