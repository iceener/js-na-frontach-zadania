export declare enum Key {
    BUY_NOW = "buyNow",
    GIVE_FOR_FREE = "forFree",
    AUCTION = "auction"
}
export declare type ProductType = {
    id: string;
    type: Key;
    name: string;
    amount: number;
    price: number;
};
export declare type ObjectData = {
    [key in Key]: ProductType[];
};
