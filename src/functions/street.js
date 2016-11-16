'use strict';

import { getDataSet } from '../config';
import { NO_LOCATION_FOUND } from '../utilities/errors';
import { pick } from '../utilities/random';
import { string } from './string';

export function street(){
    let location = getDataSet().location;
    if(!location) throw NO_LOCATION_FOUND();

    let streetNumber = string(3, '[0-9]');
    let streetName = string(7, '[a-z]');
    let streetType = pick(location.roadTypes);

    streetName = streetName.charAt(0).toUpperCase() + streetName.slice(1);

    return `${streetNumber} ${streetName} ${streetType}`;

}