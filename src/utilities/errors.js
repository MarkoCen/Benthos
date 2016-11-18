'use strict';

export function NO_DATASET_FOUND(loc){
    return new ReferenceError(`No dataset found for ${loc}`);
}

export function INVALID_TEMPLATE(template){
    return new Error(`The provided template is invalid \n ${template}`)
}

export function NO_FUNCTION_FOUND_IN_TEMPLATE(functionName, template){
    return new ReferenceError(`No related function found for ${functionName} in template ${template}`)
}

export function NO_LOCATION_FOUND() {
    return new ReferenceError('No location defined for this locale');
}

export function NO_TEXT_FOUND(){
    return new ReferenceError('No text defined for this locale');
}