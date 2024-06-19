describe('any',()=>{
    it('should must declare',()=>{
        const person:any ={
            id:1,
            name:'tahta fm',
            age:44
        }
        
        person.age=50
    })
})