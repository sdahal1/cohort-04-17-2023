const { expect } = require("chai");
const {
  getPriceInDollars,
  checkIfSizeIsAvailable,
  getProductHeading,
} = require("../src/solution");

describe("Solution", () => {
  let product = {
    name: "Court Sneaker",
    priceInCents: 9800,
    availableSizes: [5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
  };
  describe("#getPriceInDollars()", () => {
    it("should convert the price in cents to a string price in dollars", () => {
      const actual = getPriceInDollars(product);
      expect(actual).to.equal("$98.00");
    });
  });

  describe("#checkIfSizeIsAvailable()", () => {
    it("should return true if the size is available", () => {
      const actual = checkIfSizeIsAvailable(product, 8);
      expect(actual).to.be.true;
    });
    it("should return false if the size is not available", () => {
      const actual = checkIfSizeIsAvailable(product, 7.5);
      expect(actual).to.be.false;
    });
  });

  describe("#getProductHeading()", () => {
    it("should return a heading describing the product", () => {
      const actual = getProductHeading(product);
      const expected = "Court Sneaker: $98.00 (Available in 8 sizes!)";
      expect(actual).to.equal(expected);
    });
  });
});
