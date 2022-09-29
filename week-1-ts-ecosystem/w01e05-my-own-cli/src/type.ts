export enum  Key {
    BUY_NOW = "buyNow",
    GIVE_FOR_FREE = "forFree",
    AUCTION ="auction"

}
export type  ProductType  = {
    id: string,
    type: Key
    name: string,
    amount: number,
    price:  number
}

 export type ObjectData = {
    [key in Key]: ProductType[]
 }