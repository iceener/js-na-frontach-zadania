import { div } from '../framework/dom-creators';
import { Price } from './shop.types';

interface CartItemSumProps {
  value: number;
  currency: Price['currency'];
}

export function cartItemSum({ value, currency = 'PLN' }: CartItemSumProps) {
  const $panelBlock = div('panel-block is-justify-content-end');
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;
  return $panelBlock;
}
