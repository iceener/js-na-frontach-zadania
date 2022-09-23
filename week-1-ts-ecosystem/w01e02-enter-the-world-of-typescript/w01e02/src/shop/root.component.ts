import {div} from '../framework/dom-creators'
import {cartPanel} from './cart-panel.component'
import {hero} from './hero.component'
import {Product} from "../types/product";
import {Unit} from "../types/unit";
import {CurrencyType} from "../types/price";

const items:Product[] = [
  {
    name: 'Tomatoes',
    amount: 2,
    unit: Unit.KG,
    price: { value: 20, currency: CurrencyType.PLN },
  },
  {
    name: 'Banana',
    amount: 5,
    unit: Unit.KG,
    price: { value: 36, currency: CurrencyType.PLN },
  },
]

export function root() {
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' })
  const $container = div('container')
  $container.append($hero, cartPanel({ items }))
  return $container
}
