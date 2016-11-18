'use strict';

import * as functions from '../functions/index';
import { INVALID_TEMPLATE, NO_FUNCTION_FOUND_IN_TEMPLATE } from '../utilities/errors';
import { tokenize, mapStrTypes } from '../utilities/parser';

export function compile(template, scope){
    scope = scope || {};
    if(typeof template != 'string') throw INVALID_TEMPLATE(template);

    let token = tokenize(template, scope);

    token.commands.forEach(command =>{
        if(!command.skip){

            let ref = scope ?
                scope[command.name] || functions[command.name]
                : functions[command.name];

            if(ref == null)
                throw NO_FUNCTION_FOUND_IN_TEMPLATE(command.name, template);

            command.parameters.map(param=>{
                if(param.$$scopeVar){
                    return scope[param.name];
                }else{
                    return param;
                }
            });

            command.value = typeof ref != 'function' ?
                ref.toString()
                : ref.call(functions, ...command.parameters);

        }
    });

    return token.commands.length > 0 ? serialize(token.commands) : template;
}

const serialize = (commands) =>{
    return mapStrTypes(commands.map(p=>p.value).join(''));
};