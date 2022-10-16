import { cartType } from "./constants";

export type CartType = cartType.Auction | cartType.BuyNow | cartType.Free;

export interface ProductType {
  name: string;
  price: number;
  type: CartType;
  id: string;
}

type CartProduct = ProductType & { quantity: number };
