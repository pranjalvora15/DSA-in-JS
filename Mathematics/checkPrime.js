function naiveApproach(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(naiveApproach(7));

// T.C = O(n)

// optimized sol
function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(101));

// T.C = O(root(n))

// More optimized solution
function optimizedIsPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;
  if (n === 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

console.log(optimizedIsPrime(1223));

//T.C  = one-thrid of previous T.C of isPrime
