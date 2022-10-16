import { cartType } from "../constants";
import { Product } from "../model/product";

describe("product", () => {
  it("generates product with proper structure", () => {
    const product = new Product("Mocked product", 500, cartType.BuyNow);
    expect(product).toHaveProperty("id");
    expect(product).toStrictEqual(
      expect.objectContaining({
        name: "Mocked product",
        price: 500,
        type: cartType.BuyNow,
      }),
    );
  });
});
