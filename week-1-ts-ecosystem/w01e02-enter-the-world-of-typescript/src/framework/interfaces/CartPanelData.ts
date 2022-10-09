import { CartItemData } from "./CartItemData"

export interface CartPanelData extends Array<CartItemData> {
	[index: number]: CartItemData
}
