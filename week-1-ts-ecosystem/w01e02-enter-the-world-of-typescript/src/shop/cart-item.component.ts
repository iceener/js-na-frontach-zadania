import { Div } from "../framework/dom-creators"
import { CartItemData } from "../framework/interfaces/CartItemData"

export function cartItem(cartData: CartItemData): HTMLElement {
	const panelBlock = Div("panel-block")
	const name = Div()
	name.textContent = cartData.name
	const amount = Div("ml-auto")
	amount.textContent = cartData.amount.toString()
	const unit = Div("tag")
	unit.textContent = cartData.unit
	const price = Div("ml-4")
	price.textContent = `${cartData.price.value} ${cartData.price.currency}`
	panelBlock.append(name, amount, unit, price)
	return panelBlock
}
