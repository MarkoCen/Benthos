'use strict';

const benthos = require('../build/benthos');
const chai = require('chai');
const expect = chai.expect;

describe('Contacts', ()=>{

    describe('phone()', ()=>{
        it('should return a random phone number by default format (XXX)XXX-XXXX', ()=>{
            let phone = benthos.phone();
            expect(/\([0-9]{3}\)[0-9]{3}-[0-9]{4}/.test(phone)).to.equal(true);
        })
    })

    describe('phone()', ()=>{
        it('should generate a random phone number based on provided format', ()=>{
            let phone = benthos.phone('139-***-****');
            expect(/139-[0-9]{3}-[0-9]{4}/.test(phone)).to.equal(true);
        })
    })

    describe('street()', ()=>{
        it('should generate a random street address', ()=>{
            let street = benthos.street();
            expect(/[0-9]{3}\s[a-zA-Z]{7}\s\w+/.test(street)).to.equal(true);
        })
    })

    describe('address()', ()=>{
        it('should generate a full address which include street, city, country and zip code', ()=>{
            let address = benthos.address();
            expect(/[0-9]{3}\s[a-zA-Z]{7}\s.*\s[0-9]{6}/.test(address)).to.equal(true);
        })
    })

})