import {CartItem} from "./types";

export const items: CartItem[] = [
	{
		name: 'Tomatoes',
		amount: 2,
		unit: 'kg',
		price: {value: 20, currency: 'PLN'},
	},
	{
		name: 'Banana',
		amount: 5,
		unit: 'kg',
		price: {value: 36, currency: 'PLN'},
	},
]
