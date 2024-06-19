describe('Union',()=>{
    it('should must declare',()=>{
        let sample:number|string|boolean ="tAHTA";
    })
    it('should must declare',()=>{
        const process=(value:number|string|boolean)=>{
            if(typeof value === "string"){
                return value.toUpperCase();
            }else if(typeof value === "number"){
                return value + 2
            }else{
                return !value;
            }
        }

        expect(process("tahta")).toBe('TAHTA')
        expect(process(100)).toBe(102)
        expect(process(true)).toBe(false)
    })
})