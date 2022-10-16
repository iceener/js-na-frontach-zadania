import { Product } from "./model/product";
import { Cart } from "./model/cart";
import { cartType } from "./constants";

const auctionCart = new Cart(cartType.Auction);
const buyNowCart = new Cart(cartType.BuyNow);
const freeCart = new Cart(cartType.Free);

const car = new Product("Ford", 10000, cartType.Auction);
const phone = new Product("Samsung", 500, cartType.BuyNow);
const laptop = new Product("MacBook", 1000, cartType.BuyNow);
const pen = new Product("Pen", 0, cartType.Free);

auctionCart.addProduct(car);
buyNowCart.addProduct(phone);
buyNowCart.addProduct(laptop);
freeCart.addProduct(pen);

console.log(auctionCart.getProducts());
console.log(buyNowCart.getProducts());
console.log(freeCart.getProducts());
