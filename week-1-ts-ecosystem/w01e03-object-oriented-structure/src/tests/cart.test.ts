import { Cart } from "../model/cart";
import Item from "../model/item";

const testCar = new Item(
  "Car",
  5,
  "kg",
  { value: 55, currency: "PLN" },
  "BUY_NOW"
);

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

// describe("cart", () => {
//   it("generates cart instance properly and allows adding items w correct type", () => {
//     const cart = new Cart("AUCTION");
//     console.log(cart);
//     expect(cart).toHaveProperty("type");
//
//     // expect(() => cart.add(testCar)).toThrowError();
//     console.log(testPuppet);
//     // cart.add(testPuppet);
//     // expect(() => cart.getItems()).toHaveLength(1);
//   });
// });
