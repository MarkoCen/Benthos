'use strict';

import forEach from 'lodash.foreach';
import { tokenize, mapStrTypes } from '../utilities/parser';
import { NO_FUNCTION_FOUND_IN_TEMPLATE } from '../utilities/errors';
import * as functions from '../functions/index';

const isPrimitive = (obj)=>{
    let types = ['number', 'string', 'null', 'undefined', 'boolean'];
    return types.indexOf(typeof obj) > -1
};

const isObject = (obj)=>{
    return Object.prototype.toString.call(obj) == '[object Object]';
};

const isArray = (obj)=>{
    return Object.prototype.toString.call(obj) == '[object Array]';
};

const parseSchemaTree = (obj) =>{
    if(typeof obj == 'function')
        throw new Error('schema property does not allow function');

    if(isObject(obj)){
        for(let key of Object.keys(obj)){
            if(isPrimitive(obj[key])){
                if(typeof obj[key] == 'string'){
                    obj[key] = tokenize(obj[key]);
                }
            }else{
                obj[key] = parseSchemaTree(obj[key]);
            }
        }
    } else if(isArray(obj)){
        obj.forEach((e, index) =>{
            if(isPrimitive(e)){
                if(typeof e == 'string'){
                    obj[index] = tokenize(e);
                }
            }else{
                obj[index] = parseSchemaTree(e);
            }
        })
    }

    return obj;

};

export function schema(obj) {
    if(!isObject(obj))
        throw new Error('schema must be an plain object');

    return function (scope) {


        function loop(o) {
            let isArr = isArray(o);
            let result = isArr ? [] : {};
            forEach(o, (value, itt)=>{
                if(isPrimitive(value)) result[itt] = value;
                else if(value.$$bsToken){
                    let r = [];
                    forEach(value.commands, command =>{
                        if(!command.skip){

                            let ref = scope ?
                                scope[command.name] || functions[command.name]
                                : functions[command.name];

                            if(ref == null)
                                throw NO_FUNCTION_FOUND_IN_TEMPLATE(command.name);

                            let params = command.parameters.map(param=>{
                                if(param.$$scopeVar){
                                    return scope[param.name];
                                }else{
                                    return param;
                                }
                            });

                            r.push(typeof ref != 'function' ?
                                ref.toString()
                                : ref.call(functions, ...params));

                        }else{
                            r.push(command.value);
                        }
                    });
                    result[itt] = mapStrTypes(r.join(''));
                }else{
                    result[itt] = loop(value);
                }
            });
            return result;
        }

        return loop(this);

    }.bind(parseSchemaTree(obj));

}