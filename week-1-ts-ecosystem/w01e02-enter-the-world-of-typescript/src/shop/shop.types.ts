export interface Price {
  value: number;
  currency: 'PLN';
}

export interface Product {
  name: string;
  amount: number;
  unit: 'kg' | 'pcs';
  price: Price;
}
