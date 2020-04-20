//https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/

function findLargestPallindrome(str) {
  let table = [];
  let array = str.split("");
  let n = array.length;

  for (let i = 0; i < n; i++) {
    let row = [];
    table.push(row);
    for (let j = 0; j < n; j++) {
      table[i][j] = false;
    }
  }

  //for single element
  for (let i = 0; i < n; i++) {
    table[i][i] = true;
  }
  let maxLength = 1;
  let start;

  //for substring of length 2
  for (let i = 0; i < n - 1; i++) {
    if (array[i] === array[i + 1]) {
      start = i;
      table[i][i + 1] = true;
      maxLength = 2;
    }
  }

  //for substr over length 3
  for (let k = 3; k <= n; k++) {
    for (let i = 0; i <= n - k + 1; i++) {
      let j = k + i - 1;
      if (table[i + 1][j - 1] === true && array[i] === array[j]) {
        table[i][j] = true;
        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }

  return array.slice(start, start + maxLength).join("");
}

console.log(findLargestPallindrome("forgeeksskeegfor"));
