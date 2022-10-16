import { Product } from "../model/product";
import { Cart } from "../model/cart";
import { cartType } from "../constants";

describe("cart", () => {
  it("generates empty cart with correct type", () => {
    const cart = new Cart(cartType.Auction);
    expect(cart).toHaveProperty("type");
    expect(cart.type).toBe(cartType.Auction);
    expect(cart.getProductsQuantity()).toEqual(0);
  });

  it("cart can add products with the same type and provides method that return product by id", () => {
    const cart = new Cart(cartType.Auction);
    const phone = new Product("Mocked phone", 500, cartType.Auction);
    cart.addProduct(phone);
    expect(cart.getProduct(phone.id)).toBeTruthy();
    expect(cart.getProductsQuantity()).toEqual(1);
  });

  it("cart can remove product by id and provides method that returns products quantity", () => {
    const cart = new Cart(cartType.Auction);
    const phone = new Product("Mocked phone", 500, cartType.Auction);
    cart.addProduct(phone);
    cart.addProduct(phone);
    expect(cart.getProduct(phone.id)?.quantity).toEqual(2);
    cart.removeProduct(phone.id);
    expect(cart.getProduct(phone.id)?.quantity).toEqual(1);
  });

  it("cart cannot stores products with different type", () => {
    const cart = new Cart(cartType.Auction);
    const phone = new Product("Mocked phone", 500, cartType.BuyNow);
    cart.addProduct(phone);
    expect(cart.getProduct(phone.id)).toBeFalsy();
    expect(cart.getProductsQuantity()).toEqual(0);
  });

  it("cart provides method that return sum of price of all products", () => {
    const cart = new Cart(cartType.Auction);
    const phone = new Product("Mocked phone", 500, cartType.Auction);
    cart.addProduct(phone);
    cart.addProduct(phone);
    expect(cart.getProductsQuantity()).toEqual(2);
    expect(cart.getTotalPrice()).toEqual(500 * 2);
  });

  it("cart provides method that updates product by id but cannot update type", () => {
    const cart = new Cart(cartType.Auction);
    const phone = new Product("Mocked phone", 500, cartType.Auction);
    cart.addProduct(phone);
    cart.updateProduct({ ...phone, name: "Cool phone", price: 300, type: cartType.BuyNow });
    expect(cart.getProduct(phone.id)).toStrictEqual(
      expect.objectContaining({
        name: "Cool phone",
        price: 300,
        type: cartType.Auction,
      }),
    );
  });
});
