function isPalindrome(str, start, end) {
  if (start >= end) {
    return true;
  }

  return str[start] === str[end] && isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("abba", 0, 3));
console.log(isPalindrome("aba", 0, 2));
console.log(isPalindrome("abca", 0, 2));

// T.C = O(n), S.C. = O(n)
