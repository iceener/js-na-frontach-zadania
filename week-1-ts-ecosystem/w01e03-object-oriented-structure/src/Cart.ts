import Product, {ProductId, ProductType, UpdateProductParams} from "./Product";

type Products<TType extends ProductType> = Map<ProductId, Product<TType>>;

class Cart<TType extends ProductType> {
    #products: Products<TType> = new Map();

    addProduct (product: Product<TType>): void {
        this.products.set(product.id, product);
    }

    getProduct (productId: ProductId): Product<TType> | undefined {
        return this.products.get(productId);
    }

    updateProduct (id: ProductId, params: UpdateProductParams<TType>): void {
        const product = this.products.get(id);
        product.update(params);
        this.products.set(id, product);
    }

    deleteProduct (productId: ProductId): void {
        this.products.delete(productId);
    }

    get products (): Products<TType> {
        return this.#products
    }

    countProducts (): number {
        return this.products.size;
    }

    sumProducts (): number {
        const arr: [string, Product<TType>][] = Array.from(this.products);

        const sum = arr.reduce((sum, [, product]) => {
            if (!product.price) {
                return sum;
            }

            sum += product.price * product.count;
            return sum;
        }, 0);

        return Math.trunc(sum * 100) / 100;
    }

    getProductsInfo (): string {
        const arr: [string, Product<TType>][] = Array.from(this.products);

        return "\n" + arr.map(([, product]) => `- ${product.getInfo()}`).join("\n");
    }
}

export default Cart;