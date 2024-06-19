describe('Optional Parameter',()=>{
    it('should must declare',()=>{
        const sayHello =(name?:string):void=>{
            if (name){
                console.log(`Hello ${name}`)
            }else{
                console.log('Hello')
            }
        }

        // sayHello('Tahta');
        // const name:string|undefined = undefined;
        // sayHello(name);
    })
})