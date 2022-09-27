import { v4 } from "uuid";
import { CartType } from "./cart";

type Currency = "PLN";
type Unit = "kg" | "piece";

interface Price {
  value: number;
  currency: Currency;
}

/**
 * Model for shop item.
 */
interface Item {
  name: string;
  unit: Unit;
  price: Price;
  type: CartType;
}

/**
 * Class for CartItem
 * @param {string} name - product name
 * @param {number} count - product count
 * @param {Unit} unit - product unit
 * @param {Price} price - information about product price
 * @param {CartType} type - information about cart type for product
 */
class CartItem implements Item {
  id: string;
  constructor(
    public name: string,
    public count: number,
    public unit: Unit,
    public price: Price,
    public type: CartType
  ) {
    this.id = v4();
  }
}

export default CartItem;
