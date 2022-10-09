import { Div } from "../framework/dom-creators"
import { CartItemData } from "../framework/interfaces/CartItemData"
import { cartPanel } from "./cart-panel.component"
import { hero } from "./hero.component"

const items: CartItemData[] = [
	{
		name: "Tomatoes",
		amount: 2,
		unit: "kg",
		price: { value: 20, currency: "PLN" },
	},
	{
		name: "Banana",
		amount: 5,
		unit: "kg",
		price: { value: 36, currency: "PLN" },
	},
]

export function root(): HTMLElement {
	const $hero = hero({ title: "Shopping App", subTitle: "buy and sell" })
	const container = Div("container")
	container.append($hero, cartPanel(items))
	return container
}
