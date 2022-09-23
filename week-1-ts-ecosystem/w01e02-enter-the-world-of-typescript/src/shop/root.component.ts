import { div } from '../framework/dom-creators'
import { cartPanel } from '../shop/cart-panel.component'
import { hero } from '../shop/hero.component'
import {CartItem} from '../types/common';

const items: CartItem[] = [
  {
    name: 'Tomatoes',
    amount: 2,
    unit: 'kg',
    price: { value: 20, currency: 'PLN' },
  },
  {
    name: 'Banana',
    amount: 5,
    unit: 'kg',
    price: { value: 36, currency: 'PLN' },
  },
]

export function root() {
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' })
  const $container = div('container')
  $container.append($hero, cartPanel({ items }))
  return $container
}
