// first go through checkPrime.js

function primeFactor(n) {
  if (n <= 1) return -1;
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      process.stdout.write(i + " ");
      n = parseInt(n / i);
    }
  }
  if (n > 1) {
    process.stdout.write(n + "");
  }
}

function optimizedPrimeFactor(n) {
  if (n <= 1) return -1;
  while (n % 2 === 0) {
    process.stdout.write(2 + " ");
    n = parseInt(n / 2);
  }
  while (n % 3 === 0) {
    process.stdout.write(3 + " ");
    n = parseInt(n / 3);
  }

  for (let i = 5; i * i <= n; i = i + 6) {
    while (n % i === 0) {
      process.stdout.write(i + " ");
      n = parseInt(n / i);
    }
    while (n % (i + 2) === 0) {
      process.stdout.write(i + 2 + " ");
      n = parseInt(n / (i + 2));
    }
  }
  if (n > 3) {
    process.stdout.write(n + "");
  }
}

console.log("-------", 84, "----------");
optimizedPrimeFactor(84);
console.log();
console.log("-------", 450, "----------");
primeFactor(450);
