import { generateId } from "../utils";
import { CartType, ProductType } from "../types";

export class Product implements ProductType {
  constructor(public name: string, public price: number, public type: CartType) {
    this.id = generateId();
  }

  id: string;
}
