// in naive approach reverse the given string and compare the reversed string with original string
// optimized approach
function checkPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(checkPalindrome("ABCBA"));
console.log(checkPalindrome("ABCDBA"));

// T.C = O(n), S.C = O(1)
