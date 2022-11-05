function luckyNumber(n) {
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) return false;
    n = n - parseInt(n / i);
  }
  return true;
}

console.log(luckyNumber(25));
console.log(luckyNumber(15));
console.log(luckyNumber(19));
