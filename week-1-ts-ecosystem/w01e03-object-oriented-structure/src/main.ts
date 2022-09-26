/**
 * To tutaj mamy "START" programu.
 *
 * Przygotuj tutaj kawałek kodu potwierdzający poprawność działania koszyka.
 *
 * Np. Utwórz 3 różne koszyki — dodaj do nich różne produkty.
 * Potem wyświetl te produkty.
 * Wykaż, że koszyki mają różne produkty — inną ich ilość etc.
 * Przygotuj koszyki dla każdego rodzaju produktów.
 * - po prostu: wykaż, że przygotowana logika i modele danych — działają :)
 * */

import Cart from "./Cart";
import Product, { ProductType } from "./Product";

/* Core features */
const exampleCart1 = new Cart<ProductType.Buy>();
const exampleCart2 = new Cart<ProductType.Auction>();
const exampleCart3 = new Cart<ProductType.Free>();

const carrot = new Product<ProductType.Buy>("Marchewka opakowanie 1kg",2.19, 12);

exampleCart1.addProduct(carrot);
exampleCart1.addProduct(new Product<ProductType.Buy>("Ziemniaki siatka 5kg",4.59, 3));
exampleCart1.addProduct(new Product<ProductType.Buy>("Pietruszka korzeń 1kg",7.29, 2));

console.log("\n");

console.log("Cart with products to buy");
console.log("Products: ", exampleCart1.getProductsInfo());
console.log("Products after update first: ", (() => { exampleCart1.updateProduct(carrot.id, { name: "Marchewka opakowanie 3kg" }); return exampleCart1.getProductsInfo() })());
console.log("Products after sell first: ", (() => { exampleCart1.deleteProduct(carrot.id); return exampleCart1.getProductsInfo() })());
console.log("Products count: ", exampleCart1.countProducts());
console.log("Products sum", exampleCart1.sumProducts());

exampleCart2.addProduct(new Product<ProductType.Auction>("Konsola PS4 Slim", 1299, 1));
exampleCart2.addProduct(new Product<ProductType.Auction>("Konsola PS5", 2799, 1));
exampleCart2.addProduct(new Product<ProductType.Auction>("Konsola PS4 Pro", 1499, 1));
exampleCart2.addProduct(new Product<ProductType.Auction>("Konsola PS3 Slim", 799, 1));

console.log("\n");

console.log("Cart with products on auctions");
console.log("Products: ", exampleCart2.getProductsInfo());
console.log("Products count: ", exampleCart2.countProducts());
console.log("Products sum", exampleCart2.sumProducts());

exampleCart3.addProduct(new Product<ProductType.Free>("[Uszkodzony] Apple iPhone 13 Pro", undefined, 1));
exampleCart3.addProduct(new Product<ProductType.Free>("[Uszkodzony] TV Samsung", undefined, 1));
exampleCart3.addProduct(new Product<ProductType.Free>("Rower", undefined, 1));
exampleCart3.addProduct(new Product<ProductType.Free>("Samochód", undefined, 1));

console.log("\n");

console.log("Cart with products for free");
console.log("Products: ", exampleCart3.getProductsInfo());
console.log("Products count: ", exampleCart3.countProducts());
console.log("Products sum", exampleCart3.sumProducts());

export {};
