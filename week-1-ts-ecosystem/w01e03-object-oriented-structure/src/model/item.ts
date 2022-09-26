import { v4 } from "uuid";

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
  name: string;
  amount: number;
  unit: Unit;
  price: Price;
}

export class CartItem implements Item {
  public id: string;
  public name: string;
  public count: number;
  public amount: number;
  public unit: Unit;
  public price: Price;

  constructor(
    name: string,
    count: number,
    amount: number,
    unit: Unit,
    price: Price
  ) {
    this.price = price;
    this.unit = unit;
    this.amount = amount;
    this.count = count;
    this.name = name;
    this.id = v4();
  }
}

// const item = new CartItem("Test", 2, 3, "kg", { value: 45, currency: "PLN" });
