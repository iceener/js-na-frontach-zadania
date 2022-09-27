import { Cart } from "../model/cart";
import Item from "../model/item";

const testPuppet = new Item(
  "Puppet",
  2,
  "piece",
  { value: 99, currency: "PLN" },
  "AUCTION"
);

const testBall = new Item(
  "Ball",
  199,
  "piece",
  { value: 12.99, currency: "PLN" },
  "BUY_NOW"
);

describe("cart", () => {
  it("generates cart instance properly and allows adding items w correct type", () => {
    const cart = new Cart("AUCTION");
    expect(cart).toHaveProperty("type");
    expect(cart.type).toBe("AUCTION");
    cart.add(testPuppet);
    expect(cart.getItemsCount()).toBe(1);
  });

  it("generates cart instance properly and dont allow adding items w uncorrect type", () => {
    const cart = new Cart("BUY_NOW");
    expect(() => cart.add(testPuppet)).toThrowError();
    cart.add(testBall);
    expect(cart.getItemsCount()).toBe(1);
  });

  it("allows updating items in cart", () => {
    const cart = new Cart("BUY_NOW");
    cart.add(testBall);
    expect(cart.getItem(testBall.id)!.count).toBe(199);
    cart.updateItem({ ...testBall, count: 100 });
    expect(cart.getItem(testBall.id)!.count).toBe(100);
  });
});
