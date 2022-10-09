import { Article, P } from "../framework/dom-creators"
import { cartItemSum } from "./cart-item-sum.component"
import { CartPanelData } from "../framework/interfaces/CartPanelData"
import { cartItem } from "./cart-item.component"

export function cartPanel(
	items: CartPanelData,
	headTitle = "Cart Items"
): HTMLElement {
	const article = Article("panel is-primary my-6 w-75 mx-auto")
	const heading = P("panel-heading")
	heading.textContent = headTitle
	article.append(heading)
	let value = 0
	items.forEach((item) => {
		value += item.price.value
		article.appendChild(cartItem(item))
	})
	article.append(cartItemSum({ value, currency: "PLN" }))
	return article
}
