//Subarray with given sum
//geeksforgeeks problem
//https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/

function findContinuosSubArray(array, sum) {
  let tempSum = 0;
  let i = 0;

  while (i <= array.length - 2) {
    let j = i + 1;
    tempSum = array[i];
    while (j < array.length - 1) {
      tempSum = tempSum + array[j];
      if (tempSum === sum) {
        return [i + 1, j + 1];
      } else if (tempSum > sum) {
        i++;
        break;
      } else {
        j++;
        continue;
      }
    }
  }
}

module.exports = findContinuosSubArray;
