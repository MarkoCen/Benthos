'use strict';

import * as Random from 'random-js';

const engine = Random.engines.nativeMath;

export function pick(array, pickNum){
    return pickNum === undefined ?
        Random.pick(engine, array)
        : Random.sample(engine, array, parseInt(pickNum, 10));
}

export function real(precision){
    return parseFloat(Random.real(0, 1, false)(engine).toFixed(precision || 2));
}

export function number(min, max){
    return Random.integer(min || 0, max || 1)(engine);
}

export function substring(string, length){
    return Random.string(string)(engine, length);
}