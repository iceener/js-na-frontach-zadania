export type Key =  "buyNow" | "forFree" | "auctions"
export type  ProductType  = {
    id: string,
    name: string,
    amount: number,
    price:  string | null
}

 export type ObjectData = {
    [key in Key]: ProductType[]
 }