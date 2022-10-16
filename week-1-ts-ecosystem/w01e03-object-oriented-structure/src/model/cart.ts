import { CartProduct, CartType, ProductType } from "../types";
import { copy } from "../utils";
import { Product } from "./product";

export class Cart {
  #products: Array<CartProduct> = [];

  constructor(public type: CartType) {
    this.type = type;
  }

  addProduct(product: ProductType): void {
    if (product.type !== this.type || !(product instanceof Product)) return;
    const cartProduct = this.getProduct(product.id);
    if (cartProduct) return this.updateProduct({ id: product.id, quantity: cartProduct.quantity + 1 });
    const newProduct = { ...product, quantity: 1 };
    this.#products.push(newProduct);
  }

  getProduct(id: string): CartProduct | undefined {
    return copy(this.#products.find((product) => product.id === id));
  }

  updateProduct(product: Partial<CartProduct> & { id: string }): void {
    const cartProduct = this.#products.find(({ id }) => product.id === id);
    if (cartProduct) Object.assign(cartProduct, { ...product, type: cartProduct.type });
  }

  removeProduct(id: string): void {
    const product = this.getProduct(id);
    if (!product) return;
    const quantity = product.quantity - 1;
    if (quantity) {
      this.updateProduct({ id, quantity });
    } else {
      this.#products = this.#products.filter((product) => product.id !== id);
    }
  }

  getProducts(): Array<CartProduct> {
    return copy(this.#products);
  }

  getProductsQuantity(): number {
    return this.#products.reduce((value, product) => value + product.quantity, 0);
  }

  getTotalPrice(): number {
    return this.#products.reduce((price, product) => price + product.price * product.quantity, 0);
  }
}
