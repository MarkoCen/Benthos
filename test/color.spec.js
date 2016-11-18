'use strict';

const benthos = require('../build/benthos');
const chai = require('chai');
const expect = chai.expect;

describe('color()', ()=>{

    it('should return hex color by default', ()=>{
        let color = benthos.color();
        expect(color).to.match(/^#[0-9a-z]{6}/);
    })

    it('should return rgb format color', ()=>{
        let color = benthos.color('rgb');
        expect(color).to.match(/^rgb\(\d*,\s\d*,\s\d*\)/);
    })

    it('should return hsl format color', ()=>{
        let color = benthos.color('hsl');
        expect(color).to.match(/^hsl\(\d*%,\s\d*%,\s\d*%\)/);
    })

});