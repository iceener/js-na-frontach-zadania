import { div } from '../framework';
import { cartPanel } from './cart-panel.component';
import { hero } from './hero.component';
import { ItemType } from '../types';

const items: ItemType[] = [
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
];

export function root(): HTMLDivElement {
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' });
  const $container = div('container');

  $container.append($hero, cartPanel({ items }));

  return $container;
}
