export enum customerType {
    REGULAR ='REGULAR',
    GOLD= 'GOLD',
    PLATINUM ='PLATINUM'
}

export type customer= {
    id:number,
    name:string,
    type:customerType;

}