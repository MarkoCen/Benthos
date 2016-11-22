'use strict';

const benthos = require('../build/benthos');
const chai = require('chai');
const expect = chai.expect;

describe('functions', ()=>{
    describe('gender()', ()=>{
        it('should return random gender number', ()=>{
            expect(benthos.gender(true)).to.be.oneOf([1, 0]);
        })

        it('should return female or male string', ()=>{
            expect(benthos.gender()).to.be.oneOf(['Male', 'Female']);
        })

        it('should throw error if no locale found', ()=>{
            expect(benthos.locale.bind(null, 'Mars')).to.throw(Error);
        })
    })
});