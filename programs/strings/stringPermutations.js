//practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0

function swap(string, i, j) {
  let array = string.split("");
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array.join("");
}

function permute(str, l, r, allStrings) {
  if (l === r) {
    allStrings.push(str);
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r, allStrings);
      str = swap(str, l, i);
    }
  }
}

function stringPermutations(str) {
  let allStrings = [];
  permute(str, 0, str.length - 1, allStrings);
  return allStrings;
}

console.log(stringPermutations("ABCD"));
