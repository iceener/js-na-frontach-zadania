import {div} from '../framework/dom-creators'
import {PriceInterface} from "./interfaces/price.interface";

export function cartItemSum({value, currency = 'PLN'}: PriceInterface): HTMLElement {
    const $panelBlock = div('panel-block is-justify-content-end')
    $panelBlock.innerHTML = `Total price: ${value} ${currency}`
    return $panelBlock
}
