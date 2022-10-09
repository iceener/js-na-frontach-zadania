import { Div } from "../framework/dom-creators"
import { CartData } from "../framework/interfaces/CartData"

export function cartItemSum(basketSum: CartData): HTMLElement {
	const panelBlock = Div("panel-block is-justify-content-end")
	panelBlock.innerHTML = `Total price: ${basketSum.value} ${
		basketSum.currency === undefined ? "PLN" : basketSum.currency
	}`
	return panelBlock
}
