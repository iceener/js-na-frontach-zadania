import { div } from "../framework/dom-creators";
import {Price} from '../types/common';

type CartItemSumParams = Price

export function cartItemSum({ value, currency = 'PLN' }: CartItemSumParams) {
  const $panelBlock = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
