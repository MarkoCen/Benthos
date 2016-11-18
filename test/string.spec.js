'use strict';

const benthos = require('../build/benthos');
const chai = require('chai');
const expect = chai.expect;

describe('String', ()=>{
    describe('string()', ()=>{
        it('should generate random string', ()=>{
           let sample = benthos.string();
           expect(typeof sample).to.equal('string');
        })

        it('should only generate matched string if regex provided', ()=>{
            let sample = benthos.string(20, /[0-9]/g);
            expect(sample.indexOf('a')).to.equal(-1)
        })

        it('should only generate limit length string if length provided', ()=>{
            let sample = benthos.string(55);
            expect(sample.length).to.equal(55);
        })
    })

    describe('md5()', ()=>{

        it('should generate a md5 string for given string', ()=>{
            let md5 = benthos.md5('hello');
            expect(md5).to.equal('5d41402abc4b2a76b9719d911017c592');
        })

    })
});