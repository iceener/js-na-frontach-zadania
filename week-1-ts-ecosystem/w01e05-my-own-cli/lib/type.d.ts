export declare type Key = "buyNow" | "forFree" | "auctions";
export declare type ProductType = {
    id: string;
    name: string;
    amount: number;
    price: string | null;
};
export declare type ObjectData = {
    [key in Key]: ProductType[];
};
