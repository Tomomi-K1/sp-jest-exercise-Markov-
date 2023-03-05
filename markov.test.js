// const { beforeEach } = require('node:test');
let MarkovMachine = require('./markov');

beforeAll(function(){
    console.log('beforeALL');
})

describe('Markov Machine Test', function(){
    let string = "the cat in the hat"
    // let mm = new MarkovMachine(string);
    
    beforeEach(function(){
        console.log('beforeEach');
        mm = new MarkovMachine(string); 
    })

    test('testing make chain', function(){
        console.log('test')
        const chain = mm.makeChains();
        expect(chain).toEqual({'the':['cat', 'hat'],'cat':['in'], 'in':['the'], 'hat':[null]})
    })

    test('testing maketest method', function(){
        const newStr = mm.makeText();
        expect(newStr).toMatch(/hat/);
        const threeStr = mm.makeText(numWords=3)
        expect(threeStr.split(' ').length).toBeLessThanOrEqual(3);
    })

})

