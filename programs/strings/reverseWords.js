//https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string/0

function reverseWords(str) {
  let array = str.split(".");
  let returnArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    returnArray.push(array[i]);
  }
  return returnArray.join(".");
}

const a = reverseWords("i.like.this.program.very.much");

console.log(a);
