import { v4 as uuid } from "uuid"

export enum ProductType {
    Auction = "auction",
    Buy = "buy",
    Free = "free",
}

export type ProductId = ReturnType<typeof uuid>
export type Price<Type> = Type extends ProductType.Buy | ProductType.Auction ? number : undefined;

export interface UpdateProductParams<Type> {
    name?: string;
    count?: number;
    price?: Price<Type>;
}

class Product<Type extends ProductType> {
    readonly #id: ProductId;
    #name: string;
    #count: number;
    #price: Price<Type>;

    constructor(name: string, price: Price<Type>, count = 0, id = uuid()) {
        this.#name = name;
        this.#count = count;
        this.#price = price;
        this.#id = id;
    }

    get id () {
        return this.#id
    }

    get name () {
        return this.#name
    }

    get count () {
        return this.#count
    }

    get price (): number {
        return this.#price
    }

    update ({ name, count, price }: UpdateProductParams<Type>): void {
        if (name !== undefined) this.#name = name;
        if (count !== undefined) this.#count = count;
        if (price !== undefined) this.#price = price;
    }

    getInfo () {
        return `Name: ${this.#name}, ${this.#price !== undefined ? `Price: ${this.#price}, `: ""}Count: ${this.#count}`;
    }
}

export default Product;