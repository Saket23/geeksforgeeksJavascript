//https://practice.geeksforgeeks.org/problems/count-the-triplets/0

//https://www.geeksforgeeks.org/count-triplets-with-sum-smaller-that-a-given-value/

function findTriplet(array) {
  let obj = {};
  let sum = 0;
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      sum = array[i] + array[j];
      obj[sum] = 1;
    }
  }
  for (let k = 0; k < array.length; k++) {
    if (obj[array[k]]) {
      count = count + 1;
    }
  }
  if (count === 0) return -1;

  return count;
}

module.exports = findTriplet;
