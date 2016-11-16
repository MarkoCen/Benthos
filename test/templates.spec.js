'use strict';

const benthos = require('../build/benthos');
const chai = require('chai');
const expect = chai.expect;

describe('templates', ()=>{
    describe('compile()', ()=>{
        it('should interpret template ', ()=>{
            expect(benthos.compile('I am a #{gender}. Thanks')).to.be.oneOf(['I am a Male. Thanks', 'I am a Female. Thanks']);
        })

        it('could pass parameters into template', ()=>{
            expect(benthos.compile('Gender is #{gender(true)}')).to.be.oneOf([
                'Gender is 0',
                'Gender is 1'
            ])
        })

        it('could access the objects in scope', ()=>{
            expect(benthos.compile('Gender is #{gender(val)}', { val: true })).to.be.oneOf([
                'Gender is 0',
                'Gender is 1'
            ])
        })
    })
});