import CartItem from "./item";

/**
 * Allowed types of cart.
 */
export type CartType = "BUY_NOW" | "AUCTION" | "FREE";

/**
 * Cart class.
 */
export class Cart {
  #items: Map<string, CartItem> = new Map();
  constructor(public type: CartType) {
    this.type = type;
  }

  add(item: CartItem) {
    if (item.type !== this.type) {
      this.throwCartTypeError(item);
    }
    this.#items.set(item.id, item);
    return item;
  }

  getItem(itemId: string) {
    return this.#items.get(itemId);
  }

  updateItem(item: CartItem) {
    return this.#items.set(item.id, item);
  }

  deleteItem(itemId: string) {
    return this.#items.delete(itemId);
  }

  getItems() {
    return Array.from(this.#items.values());
  }

  getItemsCount() {
    return this.#items.size;
  }

  getTotalItemsPrice() {
    return this.getItems().reduce((a, b) => a + b.price.value * b.count, 0);
  }

  private throwCartTypeError(item: CartItem): void {
    throw new Error(
      `You are trying to add the wrong product type to the cart.
            This cart is type ${this.type} and product has type: ${item.type}`
    );
  }

  private throwCartItemTypeError(item: CartItem): void {
    throw new Error(
      `You are trying to add into the cart object type ${item.type} which one is not CartItem instance.
            Create a product with CartItem class`
    );
  }
}
