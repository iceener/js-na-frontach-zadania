import Cart from "../src/Cart";
import Product, {ProductType, UpdateProductParams} from "../src/Product";

let cartOfBuyProducts: Cart<ProductType.Buy>;
let cartOfAuctionProducts: Cart<ProductType.Auction>;
let cartOfFreeProducts: Cart<ProductType.Free>;

beforeEach(() => {
    cartOfBuyProducts = new Cart<ProductType.Buy>();
    cartOfAuctionProducts = new Cart<ProductType.Auction>();
    cartOfFreeProducts = new Cart<ProductType.Free>();
})

describe("Cart class - success", () => {
    it("exist", async () => {
        expect(cartOfBuyProducts).toBeInstanceOf(Cart);
    })

    it("has empty list of product at start", async () => {
        expect(cartOfBuyProducts.products).toEqual(new Map());
        expect(cartOfAuctionProducts.products).toEqual(new Map());
        expect(cartOfFreeProducts.products).toEqual(new Map());
    })

    it("can get product", async () => {
        const product = new Product<ProductType.Buy>("Name", 12.99);
        cartOfBuyProducts.addProduct(product);

        expect(cartOfBuyProducts.getProduct(product.id)).toEqual(product);
    })

    it("can add product", async () => {
        const product = new Product<ProductType.Buy>("Name", 12.99);
        cartOfBuyProducts.addProduct(product);

        expect(cartOfBuyProducts.products).toEqual(new Map([[product.id, product]]));
    })

    it("can delete product", async () => {
        const product = new Product<ProductType.Buy>("Name", 12.99);

        cartOfBuyProducts.addProduct(product);
        cartOfBuyProducts.deleteProduct(product.id);

        expect(cartOfBuyProducts.products).toEqual(new Map());
    })

    it("can update product", async () => {
        const updateParams: UpdateProductParams<ProductType.Buy> = {
            name: "Updated Name",
            count: 2,
            price: 13.99
        }

        const product = new Product<ProductType.Buy>("Name", 12.99, 1);
        const updatedProduct = new Product<ProductType.Buy>(updateParams.name, updateParams.price, updateParams.count);

        cartOfBuyProducts.addProduct(product);
        cartOfBuyProducts.updateProduct(product.id, updateParams);

        expect(cartOfBuyProducts.products).toEqual(new Map([[product.id, updatedProduct]]));
    })

    it("can count products", async () => {
        expect(cartOfBuyProducts.countProducts()).toBe(0);

        const product1 = new Product<ProductType.Buy>("Name", 12.99);
        const product2 = new Product<ProductType.Buy>("Name 2", 12.99);

        cartOfBuyProducts.addProduct(product1);
        expect(cartOfBuyProducts.countProducts()).toBe(1);

        cartOfBuyProducts.addProduct(product2);
        expect(cartOfBuyProducts.countProducts()).toBe(2);

        cartOfBuyProducts.deleteProduct(product1.id)
        expect(cartOfBuyProducts.countProducts()).toBe(1);
    })

    it("can sum products prices", async () => {
        expect(cartOfBuyProducts.sumProducts()).toEqual(0);

        const config = {
            product1: { price: 12.99, count: 3 },
            product2: { price: 9.99,  count: 5 }
        }

        const product1 = new Product<ProductType.Buy>("Name 1", config.product1.price, config.product1.count);
        const product2 = new Product<ProductType.Buy>("Name 2", config.product2.price, config.product2.count);

        cartOfBuyProducts.addProduct(product1);
        cartOfBuyProducts.addProduct(product2);

        const sumOfProduct1 = config.product1.price * config.product1.count;
        const sumOfProduct2 = config.product2.price * config.product2.count;

        expect(cartOfBuyProducts.sumProducts()).toEqual(sumOfProduct1 + sumOfProduct2);
    })
})
