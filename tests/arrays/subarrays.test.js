var arrayFunctions = require("../../programs/array/subarray");

it("should run below tests", () => {
  expect(
    arrayFunctions.findContinuousSubArray([1, 2, 3, 7, 5], 12)
  ).toMatchObject([2, 4]);

  expect(
    arrayFunctions.findContinuousSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)
  ).toMatchObject([1, 5]);

  expect(
    arrayFunctions.findContinuousSubArray(
      [1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10],
      15
    )
  ).toMatchObject([1, 6]);
  expect(
    arrayFunctions.findContinuousSubArray(
      [1, 2, 0, 3, 4, -4, 3, 1, 5, 6, 7, 8, 9, 10],
      15
    )
  ).toMatchObject([1, 9]);
});

it("negative function", () => {
  expect(
    arrayFunctions.findContinuousSubArrayForNegative([10, 2, -2, -20, 10], -10)
  ).toMatchObject([0, 3]);
});
