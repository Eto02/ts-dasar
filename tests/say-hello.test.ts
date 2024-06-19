import { sayHello } from "../src/say-hello"

describe('sayHello',()=>{
    it('should be return hello tahat',()=>{
        expect(sayHello('tahta')).toBe('Hello tahta')
    })

})