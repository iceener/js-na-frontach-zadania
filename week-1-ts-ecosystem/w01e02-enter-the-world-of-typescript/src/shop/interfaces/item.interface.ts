import {PriceInterface} from "./price.interface";

export interface ItemInterface {
    name: string;
    amount: number;
    unit: 'kg' | 'l' | 'szt';
    price: PriceInterface;
}
