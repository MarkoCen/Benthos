'use strict';

const random = require('../build/utilities/random');
const benthos = require('../build/benthos');
const chai = require('chai');
const expect = chai.expect;

describe('random', ()=>{
    describe('pick()', ()=>{
       it('should pick a random object from array', ()=>{
           let array = [1, 2, 3, 4, 5];
           expect(random.pick(array)).be.oneOf(array);
       })
    })

    describe('number()', ()=>{
        it('should return a number from 0 to 1 by default', ()=>{
            expect(random.number()).to.be.within(0, 1);
        })

        it('should return a number from 10 to 10000', ()=>{
            expect(random.number(10, 10000)).be.within(10, 10000);
        })
    })

    describe('boolean()', ()=>{
        it('should return true or false', ()=>{
            expect(benthos.boolean()).to.be.oneOf([true, false])
        })
    })

});