import { Category, Product } from "../src/type-alias"

describe('any',()=>{
    it('should must declare',()=>{
        const category: Category={
            id:"1",
            name:"tahta",
        }
        const product: Product={
            id:"1",
            name:" mac m1",
            price:100,
            category:category
        }
    })
})