import { ObjectData, Key} from "./type";
import { ShopFactory} from "w01e03-object-oriented-structure/src/ShopFactory";
import {pinoMessage} from "./common";

export const  createShopCard = async (cartItemData: ObjectData,Type: Key, Name: any) => {
    pinoMessage(`${Name} - It is your Summary: `)
     // @ts-ignore
    Object.keys(cartItemData).forEach((key: Key) => {
         const shopFactory = new ShopFactory<typeof key>()
         cartItemData[key as Key].forEach(cartItem =>  {
             shopFactory.addProductToShopCard(cartItem, cartItem.amount)
         })
       const allProductsLength =  shopFactory.getLengthAllProducts()
        pinoMessage(`Your products in the shopping cart for the category - ${key} ${allProductsLength}`)
     })
}