var findContinuosSubArray = require("../../programs/array/subarray");

it("should run below tests", () => {
  expect(findContinuosSubArray([1, 2, 3, 7, 5], 12)).toMatchObject([2, 4]);

  expect(
    findContinuosSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)
  ).toMatchObject([1, 5]);
});
