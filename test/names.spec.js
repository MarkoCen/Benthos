'use strict';

const benthos = require('../build/benthos');
const chai = require('chai');
const expect = chai.expect;

describe('Names', ()=>{

    describe('firstName()', ()=>{

        let maleFirstNames = require('../build/datasets/en/firstNames_data').male;
        let femaleFirstNames = require('../build/datasets/en/firstNames_data').female;

        it('should pick a boy name if gender is 1', ()=>{
            let name = benthos.firstName(1);
            expect(name).to.be.oneOf(maleFirstNames);
        })

        it('should pick a boy name if gender is male', ()=>{
            let name = benthos.firstName('male');
            expect(name).to.be.oneOf(maleFirstNames);
        })

        it('should pick a girl name if gender is 0', ()=>{
            let name = benthos.firstName(0);
            expect(name).to.be.oneOf(femaleFirstNames);
        })

        it('should pick a girl name if gender is female', ()=>{
            let name = benthos.firstName('female');
            expect(name).to.be.oneOf(femaleFirstNames);
        })

    })

    describe('lastName()', ()=>{

        let lastNames = require('../build/datasets/en/lastNames_data').lastNames;

        it('should pick a last name randomly', ()=>{
            let name = benthos.lastName();
            expect(name).to.be.oneOf(lastNames)
        })

    })

    describe('name()', ()=>{

        let maleFirstNames = require('../build/datasets/en/firstNames_data').male;
        let femaleFirstNames = require('../build/datasets/en/firstNames_data').female;
        let lastNames = require('../build/datasets/en/lastNames_data').lastNames;

        it('should pick a boy full name if gender is 1', ()=>{

            let name = benthos.name(1).split(' ');

            expect(name[0]).to.be.oneOf(maleFirstNames);
            expect(name[1]).to.be.oneOf(lastNames);

        })

    })

})