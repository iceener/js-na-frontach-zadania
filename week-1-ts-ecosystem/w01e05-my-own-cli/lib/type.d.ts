export declare type Key = "BUY" | "FREE" | "AUCTION";
export declare type ProductType = {
    "id": number;
    "name": string;
    "amount": number;
    "price": string | null;
}[];
export declare type JsonDataType = {
    key: Key;
    data: ProductType;
};
