'use strict';

const benthos = require('../build/benthos');
const expect = require('chai').expect;

describe('Number', ()=>{

    describe('integer()', ()=>{

        it('should return an integer between 0 and 20', ()=>{
            let int = benthos.integer(20);
            expect(int).to.be.within(0, 20);
        })

        it('should return an integer between 15 and 30', ()=>{
            let int = benthos.integer(15, 30);
            expect(int).to.be.within(15, 30);
        })

        it('could return integer as hex', ()=>{
            let int = parseInt(benthos.integer(10, 20, 'hex'), 16);
            expect(int).to.be.within(10, 20);
        })

        it('could return integer as binary', ()=>{
            let int = parseInt(benthos.integer(10, 20, 'bin'), 2);
            expect(int).to.be.within(10, 20);
        })

        it('could return integer as octal', ()=>{
            let int = parseInt(benthos.integer(10, 20, 'oct'), 8);
            expect(int).to.be.within(10, 20);
        })

        it('could return integer as customized digits', ()=>{
            let int = parseInt(benthos.integer(10, 20, 5), 5);
            expect(int).to.be.within(10, 20);
        })

    })

    describe('float()', ()=>{

        it('should return a float number between 0 and 1', ()=>{
            let float = benthos.float();
            expect(float).to.be.within(0, 1);
        })

        it('could customize precision', ()=>{
            let float = benthos.float(6);
            expect((""+float).split(".")[1].length).to.equal(6);
        })

    })

})