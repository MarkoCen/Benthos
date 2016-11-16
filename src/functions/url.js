'use strict';

import { domain } from './domain';

export function url({ host, protocol, query, port, hash, path }={}){

    host = host || domain();
    protocol = protocol || 'http';
    port = port ?
        port[0] == ":" ? port : ":" + port
        : '';
    hash = hash ?
        hash[0] == '#' ? hash : '#' + hash
        : '';
    path = path ?
        path[0] == '/' ? path : '/' + path
        : '';

    let search = [];

    if(query){
        for(let q of Object.keys(query)){
            search.push(`${q}=${encodeURI(query[q])}`);
        }
    }

    return `${protocol}://${host}${port}${path}${hash}${search.length > 0 ? '?' + search.join('&') : ''}`

}