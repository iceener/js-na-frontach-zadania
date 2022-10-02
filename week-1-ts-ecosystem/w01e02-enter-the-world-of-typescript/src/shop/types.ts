export type Unit = "kg";
export type Currency = "PLN";

export interface Item {
  name: string;
  amount: number;
  unit: Unit;
  price: { value: number; currency: Currency };
}
