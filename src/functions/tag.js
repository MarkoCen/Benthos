'use strict';

import { words } from './words';

export function tag(symbol) {
    symbol = symbol || '#';
    return `${symbol}${words(1)}`;
}