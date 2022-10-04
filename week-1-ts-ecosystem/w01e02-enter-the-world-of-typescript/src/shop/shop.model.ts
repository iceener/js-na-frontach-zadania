export type Currency = 'PLN'

export type CartItemUnit = 'kg'

export type CartItem = {
  name: string,
  amount: number,
  unit: CartItemUnit,
  price: {value: number, currency: Currency}
}

export type CartItemSum = {
    value: number,
    currency: Currency
}

export type HeroElementConfig = {
    title: string,
    subTitle: string
  }
 export type CartPanelConfig = {
    heading?: string,
    items: CartItem[]
 }