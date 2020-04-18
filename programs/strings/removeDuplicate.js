//https://www.geeksforgeeks.org/remove-consecutive-duplicates-string/

function removeDuplicates(str) {
  let array = str.split("");
  let n = array.length;
  if (n < 2) {
    return;
  }
  let j = 0;
  for (let i = 1; i < n; i++) {
    if (array[j] !== array[i]) {
      j++;
      array[j] = array[i];
    }
  }
  return array.slice(0, j + 1).join("");
}

console.log(removeDuplicates("abbbaacab"));
