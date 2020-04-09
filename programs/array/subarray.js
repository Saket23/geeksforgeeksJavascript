//Subarray with given sum
//geeksforgeeks problem
//https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/

function findContinuousSubArray(array, sum) {
  let currSum = 0;
  let start = 0;
  let returnValue = [];
  //keep adding sum in every iteration to currSum until it is less than sum
  for (let i = 0; i < array.length; i++) {
    if (array[start] === 0) start++;
    if (currSum < sum) {
      currSum = currSum + array[i];
    }
    //once it is greater than sum subtract the first element of array from sum
    if (currSum > sum) {
      currSum = currSum - array[start++];
    }
    //if currSum and sum is equal return the indices
    if (currSum === sum) {
      returnValue = [start + 1, i + 1];
      break;
    }
  }
  return returnValue;
}

function findContinuousSubArrayForNegative(array, sum) {
  let obj = {};
  let currSum = 0;
  for (let i = 0; i < array.length; i++) {
    currSum = currSum + array[i];
    obj[currSum] = i;
    if (currSum === sum) {
      return [0, i];
    } else if (obj[currSum - sum]) {
      return [obj[currSum - sum] + 1, i];
    }
  }
}

module.exports = { findContinuousSubArray, findContinuousSubArrayForNegative };
