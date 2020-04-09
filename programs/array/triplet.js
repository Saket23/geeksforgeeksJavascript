//https://practice.geeksforgeeks.org/problems/count-the-triplets/0

//https://www.geeksforgeeks.org/count-triplets-with-sum-smaller-that-a-given-value/

function findTriplet(array) {
  let count = 0;
  for (let i = 0; i < array.length - 2; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        for (let k = j + 1; k < array.length; k++) {
          if (k !== i) {
            if (array[i] === array[j] + array[k]) {
              count++;
            }
          }
        }
      }
    }
  }
  if (count === 0) return -1;
  return count;
}

module.exports = findTriplet;
