import { customer, customerType } from "../src/enum"

describe('any',()=>{
    it('should must declare',()=>{
        const customer:customer ={
            id:1,
            name:'tahta fm',
            type:customerType.GOLD
        }
        
    })
})