'use strict';

const benthos = require('../build/benthos');
const chai = require('chai');
const expect = chai.expect;

describe('templates', ()=>{
    describe('compile()', ()=>{
        it('should interpret template ', ()=>{
            expect(benthos.compile('I am a {{gender}}. Thanks')).to.be.oneOf(['I am a Male. Thanks', 'I am a Female. Thanks']);
        })

        it('could pass parameters into template', ()=>{
            expect(benthos.compile('Gender is {{gender(true)}}')).to.be.oneOf([
                'Gender is 0',
                'Gender is 1'
            ])
        })

        it('should support scope variables and functions', ()=>{
            let template = benthos.compile('{{hisName("Shan")}} is {{gender(val)}}', {
                val: true,
                hisName: function (lastName) {
                    return `${this.firstName(1)} ${lastName}`
                }
            });
            expect(template).to.match(/^\w*\sShan\sis\s[0-1]/)
        })
    })

    describe('schema()', ()=>{
        it('should interpret template ', ()=>{
            let User = benthos.schema({
                age: '{{integer(20, 25)}}',
                gender: '{{gender}}',
                name: 'Smith'
            });
            let user = User();
            expect(user.age).to.be.within(20, 25);
            expect(user.gender).to.be.oneOf(['Male', 'Female']);
            expect(user.name).to.equal('Smith');
        })

        it('should support scope variables and functions', ()=>{
            let User = benthos.schema({
                age: '{{twentyFive}}',
                name: '{{myName("Smith")}}',
                bio: 'I am from {{country}}'
            });
            let user = User({
                twentyFive: 25,
                myName: function(firstName){
                    return firstName + ' ' + this.lastName();
                }
            });
            expect(user.age).to.be.within(20, 25);
            expect(user.name).to.match(/^Smith\s\w*/);
            expect(user.bio).to.match(/^I\sam\sfrom\s\w*/);

        })
    })
});