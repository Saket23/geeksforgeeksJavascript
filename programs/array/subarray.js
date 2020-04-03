//Subarray with given sum
//geeksforgeeks problem
//https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/

function findContinuousSubArray(array, sum) {
  let currSum = 0;
  let start = 0;
  let returnValue = [];
  for (let i = 0; i < array.length; i++) {
    if (currSum < sum) {
      currSum = currSum + array[i];
    }
    if (currSum > sum) {
      currSum = currSum - array[start++];
    }
    if (currSum === sum) {
      returnValue = [start + 1, i + 1];
      break;
    }
  }
  return returnValue;
}

module.exports = findContinuousSubArray;
