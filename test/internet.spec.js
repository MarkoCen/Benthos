'use strict';

const benthos = require('../build/benthos');
const expect = require('chai').expect;

describe('Internet', ()=>{

    describe('email()', ()=>{

        it('should return a random email address', ()=>{
            let email = benthos.email();
            expect(/\w*?@\w*?\.\w*/.test(email)).to.equal(true);
        })

        it('supports customized domain', ()=>{
            let email = benthos.email('google.com');
            expect(/\w*?@google\.com/.test(email)).to.equal(true);
        })

    })

    describe('ipv4()', ()=>{

        it('should return a random ipv4 address', ()=>{
            let ip = benthos.ipv4();
            expect(/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/.test(ip))
                .to.equal(true);
        })

    });

    describe('ipv6()', ()=>{
        it('should return a random ipv6 address', ()=>{
            let ip = benthos.ipv6();
            expect(/^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/.test(ip))
                .to.equal(true);
        })
    })

    describe('image()', ()=>{
        it('should return a random image from unsplash.it', ()=>{
            let image = benthos.image(300, 400);
            expect(image).to.match(/https:\/\/unsplash.it\/300\/400\/\?random/);
        })
    })

    describe('url()', ()=>{

        it('should return random url by default', ()=>{
            let url = benthos.url();
            expect(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(url)).to.equal(true)
        })

        it('should return https://google.com', ()=>{
            let url = benthos.url({ protocol: 'https', host: 'google.com' });
            expect(url).to.equal('https://google.com')
        })

        it('should support query', ()=>{
            let url = benthos.url({ protocol: 'https', host: 'google.com', query: { q: 'test'} });
            expect(url).to.equal('https://google.com?q=test')
        })

        it('should support path', ()=>{
            let url = benthos.url({ protocol: 'https', host: 'google.com', path: 'foo/bar' });
            expect(url).to.equal('https://google.com/foo/bar')
        })

        it('should support port', ()=>{
            let url = benthos.url({ protocol: 'https', host: 'google.com', port: 1234 });
            expect(url).to.equal('https://google.com:1234')
        })

        it('should support hash', ()=>{
            let url = benthos.url({ protocol: 'https', host: 'google.com', hash: 'test' });
            expect(url).to.equal('https://google.com#test')
        })

    })

})