export interface ItemPrice {
    value: number;
    currency: "PLN"
}

type ItemUnit = "kg" | "g"

export interface Item {
    name: string;
    amount: number;
    unit: ItemUnit;
    price: ItemPrice;
}