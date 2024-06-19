describe('Function',()=>{
    it('should must declare',()=>{
        
        const sayHello=(name:string):string=>{
            return `Hello ${name}`;
        }

        expect(sayHello('tahta')).toBe('Hello tahta')

        const printHello=(name:string):void=>{
            console.log(`Hello ${name}`)
        }

        printHello('Tahta')
    })

    it('should must support default value',()=>{
        
        const sayHello=(name:string = 'Guest'):string=>{
            return `Hello ${name}`;
        }

        expect(sayHello('tahta')).toBe('Hello tahta')
        expect(sayHello()).toBe('Hello Guest')
    })

    it('should must support rest param',()=>{
        
        const sum=(...values:number[]):number=>{
            let total=0;
            for (const value of values){
                total +=value;
            }
            return total;
        }

        expect(sum(1,2,3,4,5)).toBe(15)
    })

    it('should must support optional param',()=>{
        
        const sayHello=(firstname:string,lastname?:string):string=>{
            if (lastname){
                return `Hello ${firstname} ${lastname}`;
            }else{
                return `Hello ${firstname}`;
            }
           
        }

        expect(sayHello('Tahta')).toBe('Hello Tahta')
        expect(sayHello('Tahta', 'Failah')).toBe('Hello Tahta Failah')
    })

    it('should must support overloading func ',()=>{

        function callMe(value:number):number;
        function callMe(value:string):string;
        function callMe(value:any):any  {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        };

        expect(callMe('Tahta')).toBe('TAHTA')
        expect(callMe(10)).toBe(12)
    })

    it('should must support func as param  ',()=>{

        const sayHello=(name:string,filter:(name:string)=>string):string=>{
                return `Hello ${filter(name)}`;
        }

        const toUpper=(name:string):string=>{
           return name.toUpperCase()
        }

        expect(sayHello('Tahta',toUpper)).toBe('Hello TAHTA')
      
         expect(sayHello('Tahta',(name:string):string=> name.toUpperCase())).toBe('Hello TAHTA');
    })

    
})