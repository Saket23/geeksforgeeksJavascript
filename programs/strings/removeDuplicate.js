//https://www.geeksforgeeks.org/remove-consecutive-duplicates-string/

function removeDuplicate(str) {
  if (str.length <= 1) {
    return str;
  } else {
    let array = str.split("");
    if (array[0] === array[1]) {
      while (array.length > 0 && array[0] === array[1]) {
        array = array.slice(1);
      }
      array = array.slice(1);
      return removeDuplicate(array.join(""));
    }
    let rem_str = removeDuplicate(array.splice(1).join(""));
    if (rem_str.length > 0 && rem_str[0] === array[0]) {
      return rem_str
        .split("")
        .slice(1)
        .join("");
    }
    let returnArray = [array[0], ...rem_str.split("")];
    return returnArray.join("");
  }
}

console.log(removeDuplicate("abbbaacab"));
