import { div } from '../framework/dom-creators'
import {CurrencyType} from "../types/price";

type PropsTypes = {
  value:number
  currency:CurrencyType
}
export function cartItemSum({ value, currency = CurrencyType.PLN }:PropsTypes) {
  const $panelBlock = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
