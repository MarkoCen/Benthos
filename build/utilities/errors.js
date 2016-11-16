'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NO_DATASET_FOUND = NO_DATASET_FOUND;
exports.INVALID_TEMPLATE = INVALID_TEMPLATE;
exports.NO_FUNCTION_FOUND_IN_TEMPLATE = NO_FUNCTION_FOUND_IN_TEMPLATE;
exports.NO_LOCATION_FOUND = NO_LOCATION_FOUND;
function NO_DATASET_FOUND(loc) {
    return new ReferenceError('No dataset found for ' + loc);
}

function INVALID_TEMPLATE(template) {
    return new Error('The provided template is invalid \n ' + template);
}

function NO_FUNCTION_FOUND_IN_TEMPLATE(functionName, template) {
    return new ReferenceError('No related function found for ' + functionName + ' in template ' + template);
}

function NO_LOCATION_FOUND() {
    return new ReferenceError('No location defined for this locale');
}