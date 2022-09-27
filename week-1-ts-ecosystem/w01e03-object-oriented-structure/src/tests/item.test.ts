import Item from "../model/item";

describe("item", () => {
  it("generates id for item automatically", () => {
    const testItem = new Item(
      "Test Item",
      1,
      "piece",
      { value: 59.99, currency: "PLN" },
      "BUY_NOW"
    );
    expect(testItem).toHaveProperty("id");
    expect(testItem).toHaveProperty("type");
    expect(testItem.type).toBe("BUY_NOW");
  });
});
