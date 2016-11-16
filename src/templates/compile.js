'use strict';

import * as funcs from '../functions/index';
import { INVALID_TEMPLATE, NO_FUNCTION_FOUND_IN_TEMPLATE } from '../utilities/errors';
import { tokenize } from '../utilities/parser';

export function compile(template, scope){
    scope = scope || {};
    if(typeof template != 'string') throw INVALID_TEMPLATE(template);

    let commands = tokenize(template, scope);

    commands.forEach(command =>{
        if(!command.skip){
            if(!funcs[command.name]) throw NO_FUNCTION_FOUND_IN_TEMPLATE(command.name, template);
            command.value = funcs[command.name].call(null, ...command.parameters);
        }
    });

    return commands.length > 0 ? serialize(commands) : template;
}

const serialize = (commands) =>{
    return commands.map(p=>p.value).join('');
};