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
import { Cart } from "./model/cart";
import Item from "./model/item";

const newCart = new Cart("BUY_NOW");
const item1 = new Item(
  "Test Item",
  1,
  1,
  "kg",
  { value: 55, currency: "PLN" },
  "BUY_NOW"
);
newCart.add(item1);
console.log(newCart.getItems());
