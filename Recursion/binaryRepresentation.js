function decimalToBinary(n) {
  if (n === 0) {
    return;
  }
  decimalToBinary(parseInt(n / 2));
  process.stdout.write((n % 2) + " ");
}

decimalToBinary(10);
console.log();
decimalToBinary(5);
