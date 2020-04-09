const findTriplet = require("../../programs/array/triplet");

it("should pass", () => {
  expect(findTriplet([1, 5, 3, 2])).toBe(2);
  expect(findTriplet([3, 2, 7])).toBe(-1);
});
