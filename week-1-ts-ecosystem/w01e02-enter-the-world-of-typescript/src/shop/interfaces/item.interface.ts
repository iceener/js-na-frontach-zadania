export interface ItemInterface {
    name: string;
    amount: number;
    unit: 'kg' | 'l' | 'szt';
    price: PriceInterface;
}

export interface PriceInterface {
    value: number;
    currency: 'PLN'
}
