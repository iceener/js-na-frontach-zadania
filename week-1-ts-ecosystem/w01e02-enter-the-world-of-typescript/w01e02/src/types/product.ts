import {PriceType} from "./price";
import {Unit} from "./unit";

export type Product = {
  name: string,
  amount: number,
  unit: Unit,
  price: PriceType,
}
