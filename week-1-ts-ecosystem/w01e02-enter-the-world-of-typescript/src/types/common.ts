// Add more in future
type Currency = "PLN"
type Unit = "kg"

export type Price = {
  value: number;
  currency: Currency;
}

export type CartItem = {
  name: string;
  amount: number;
  unit: Unit;
  price: Price;
}