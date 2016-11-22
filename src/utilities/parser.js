'use strict';

const convertStr = (str) => {
    if(str == null) return str;
    if(str === 'true') return true;
    if(str === 'false') return false;
    if(!isNaN(str)) return +str;
    if(/".*"/.test(str)) return str.substring(1, str.length - 1);
    return { $$scopeVar: true, name: str };
}

export function mapStrTypes(str){
    if(str == null) return str;
    if(str === 'true') return true;
    if(str === 'false') return false;
    if(!isNaN(str)) return +str;
    return str.toString();
}

export function parseFormat(formatStr){
    if(formatStr == undefined)
        return 10;
    switch(formatStr){
        case 'hex': return 16;
        case 'oct': return 8;
        case 'bin': return 2;
        default: return parseInt(formatStr, 10);
    }
};

export function tokenize(template){
    let regex = /\{\{(.*?)}}/g;
    let commands = [];
    let m;
    let p = 0;

    while (( m = regex.exec(template)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        if(m[1]){
            if(p != m.index)
                commands.push({
                    value: template.substring(p, m.index),
                    skip: true
                });
            p = m.index + m[0].length;
            let match = m[1];
            let command = match.trim();
            let name = /^(\w*)/.exec(command);
            let params = /\((.*?)\)/.exec(command);
            commands.push({
                name: name ? name[1] : '',
                parameters: params ? (params[1] || '')
                    .trim()
                    .split(',')
                    .map(p=> { return convertStr(p.trim()) })
                    : []
            });
        }
    }

    if(p != template.length)
        commands.push({
            value: template.substring(p),
            skip: true
        });

    return { $$bsToken: true, commands };
}