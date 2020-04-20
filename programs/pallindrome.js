//https://www.geeksforgeeks.org/check-number-palindrome-not-without-using-extra-space/

function findPallindrome(number) {
  let divisor = 10;
  let newNum = number;
  while (newNum > 0) {
    newNum = parseInt(newNum / divisor);
    divisor = divisor * 10;
  }
  newNum = number;
  while (newNum > 0) {
    let a = parseInt(newNum / divisor);
    let b = newNum % 10;
    if (a !== b) {
      return "Not pallindrome";
    } else {
      newNum = newNum % divisor;
      newNum = parseInt(newNum / 10);
      divisor = divisor / 100;
    }
  }
  return "Pallindrome";
}

console.log(findPallindrome(23));
