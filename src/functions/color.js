'use strict';

import { number } from '../utilities/random';

const rgbToHsl = (r, g, b)=>{
    let min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        delta = max - min,
        h, s, v = max;

    v = Math.floor(max / 255 * 100);
    if ( max != 0 ) s = Math.floor(delta / max * 100);
    else return [0, 0, 0];

    if( r == max ) h = ( g - b ) / delta;
    else if( g == max ) h = 2 + ( b - r ) / delta;
    else h = 4 + ( r - g ) / delta;

    h = Math.floor(h * 60);
    if( h < 0 ) h += 360;

    return [h, s, v];

};

const getHexNumber = (c)=> {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b)=> {
    return `#${getHexNumber(r) + getHexNumber(g) + getHexNumber(b)}`;
};

export function color(format) {
    let r = number(0, 256);
    let g = number(0, 256);
    let b = number(0, 256);

    switch(format){
        case 'rgb': return `rgb(${r}, ${g}, ${b})`;
        case 'hsl': {
            let hsl = rgbToHsl(r, g, b);
            return `hsl(${hsl[0]}%, ${hsl[1]}%, ${hsl[2]}%)`;
        }
        case 'hex':
        default: return rgbToHex(r, g, b);
    }
}