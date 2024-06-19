import { Employee, Manager } from "../src/employee"
import { Person } from "../src/person"
import { Seller } from "../src/seller"

describe('any',()=>{
    it('should must interface',()=>{
        const seller:Seller ={
            id:1,
            name:'tahta fm',
            nib:'123',
            npwp:'1231'
        }

        seller.name ="Tahta FM"
        
    })

    it('should must interface function',()=>{
        interface addFunction {
            (value1:number,value2:number):number;
        }
        
        const add:addFunction = (value1:number,value2:number):number=>{
            return value1+ value2;
        }

    })

    it('should must indexable interface',()=>{
        interface stringArray {
           [index:number]:string;
        }
        
        const names:stringArray =['Tahta','Failah','Mubarak'];
    })

    it('should must dict interface',()=>{
        interface stringArray {
           [key:string]:string;
        }
        
        const dict:stringArray ={
            name:"Tahta",
            age:"12"
        }

    })

    it('should must extend interface',()=>{
        
        const employee:Employee={
            id:1,
            name:'Tahta',
            division:'Dev'
        }

        const manager:Manager={
            id:2,
            name:"Failah",
            division:"Func",
            numberOfEmployee:1

        }

    })

    it('should must function interface',()=>{
        const person:Person={
            name:'Tahta',
            sayHello:function(name:string):string{
                return `Hello ${name}, my name is ${this.name}`;

            }
        }

    })

    it('should must intersection  interface',()=>{
        
        interface HasName {
            name:string
        }

        interface HasId{
            id:number
        }

        type Domain = HasName & HasId;

        const domain:Domain={
            name:'tahta',
            id:1
        }

    })

    it('should must assertion interface',()=>{
        const person:any={
            name:'Tahta',
            age:'24'
        }

       const person2: Person = person as Person;

    })
})