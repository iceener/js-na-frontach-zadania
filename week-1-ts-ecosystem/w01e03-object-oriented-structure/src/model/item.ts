import { v4 } from "uuid";
import { CartType } from "./cart";

type Currency = "PLN";
type Unit = "kg";

interface Price {
  value: number;
  currency: Currency;
}

/**
 * Model for shop item.
 */
interface Item {
  type: CartType;
  name: string;
  amount: number;
  unit: Unit;
  price: Price;
}

class CartItem implements Item {
  public id: string;
  public name: string;
  public count: number;
  public amount: number;
  public unit: Unit;
  public price: Price;
  public type: CartType;

  constructor(
    name: string,
    count: number,
    amount: number,
    unit: Unit,
    price: Price,
    type: CartType
  ) {
    this.price = price;
    this.unit = unit;
    this.amount = amount;
    this.count = count;
    this.name = name;
    this.type = type;
    this.id = v4();
  }
}

export default CartItem;

// const item = new CartItem("Test", 2, 3, "kg", { value: 45, currency: "PLN" });
