function printAllPermutationOfString(str, index = 0) {
  if (index === str.length - 1) {
    console.log(str);
  }

  for (let j = index; j < str.length; j++) {
    str = swap(str, index, j);
    printAllPermutationOfString(str, index + 1);
    str = swap(str, index, j);
  }
}

function swap(str, i, j) {
  let temp;
  let charArray = str.split("");
  temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;

  return charArray.join("");
}

printAllPermutationOfString("ABC");
