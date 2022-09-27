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
import { CartType } from "./model/cart";
import CartItem from "./model/item";

const testCartType: CartType = "BUY_NOW";

const testItem = new CartItem(
  "Test Product",
  1,
  "piece",
  { value: 55, currency: "PLN" },
  testCartType
);

console.log(testItem);
