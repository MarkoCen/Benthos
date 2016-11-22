'use strict';

const benthos = require('../build/benthos');
const chai = require('chai');
const expect = chai.expect;

describe('Date', ()=>{


    describe('dateIn()', ()=>{
        it('should return a random date within current week by default', ()=>{
            let date = benthos.dateIn();
            let current = new Date();
            let c = {
                cYr: current.getFullYear(),
                cMn: current.getMonth(),
                cDt: current.getDate(),
                cDy: current.getDay(),
                cHr: current.getHours(),
                cMin: current.getMinutes(),
                cSec: current.getSeconds(),
                cMil: current.getMilliseconds()
            };
            let firstDay = c.cDt - c.cDy + (c.cDy == 0 ? -6 : 1);
            let lastDay = c.cDt + (c.cDy == 0 ? 0 : 6 - c.cDy) + 1;
            let before = new Date(c.cYr, c.cMn, lastDay);
            let after = new Date(c.cYr, c.cMn, firstDay);
            expect(date).to.be.within(after, before);
        })

        it('should return a random date within current day', ()=>{
            let date = benthos.dateIn('day');
            let current = new Date();
            let c = {
                cYr: current.getFullYear(),
                cMn: current.getMonth(),
                cDt: current.getDate(),
                cDy: current.getDay(),
                cHr: current.getHours(),
                cMin: current.getMinutes(),
                cSec: current.getSeconds(),
                cMil: current.getMilliseconds()
            };
            let before = new Date(c.cYr, c.cMn, c.cDt + 1);
            let after = new Date(c.cYr, c.cMn, c.cDt - 1, 23, 59, 59, 999);
            expect(date).to.be.within(after, before);
        })

        it('should return a random date within current month', ()=>{
            let date = benthos.dateIn('day');
            let current = new Date();
            let c = {
                cYr: current.getFullYear(),
                cMn: current.getMonth(),
                cDt: current.getDate(),
                cDy: current.getDay(),
                cHr: current.getHours(),
                cMin: current.getMinutes(),
                cSec: current.getSeconds(),
                cMil: current.getMilliseconds()
            };
            let before = new Date(c.cYr, c.cMn + 1);
            let after = new Date(c.cYr, c.cMn - 1, 31, 23, 59, 59, 999);
            expect(date).to.be.within(after, before);
        })

        it('should return a random date within current year', ()=>{
            let date = benthos.dateIn('day');
            let current = new Date();
            let c = {
                cYr: current.getFullYear(),
                cMn: current.getMonth(),
                cDt: current.getDate(),
                cDy: current.getDay(),
                cHr: current.getHours(),
                cMin: current.getMinutes(),
                cSec: current.getSeconds(),
                cMil: current.getMilliseconds()
            };
            let before = new Date(c.cYr + 1, 0, 1);
            let after = new Date(c.cYr - 1, 11, 31, 23, 59, 59, 999);
            expect(date).to.be.within(after, before);
        })
    })

})