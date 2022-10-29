function isPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;
  if (n === 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function naiveApproch(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      process.stdout.write(i + " ");
    }
  }
}

naiveApproch(15);

// T.C = O(n* square root(n))
console.log();
console.log("------------- optimizedApproach1 -----------------");
function optimizedApproch1(n) {
  let temp = Array(n + 1).fill(true);
  for (let i = 2; i * i <= n; i++) {
    if (temp[i]) {
      for (let j = 2 * i; j <= n; j = j + i) {
        temp[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (temp[i]) {
      process.stdout.write(i + " ");
    }
  }
}

optimizedApproch1(9);
console.log();
console.log("------------- optimizedApproach2 -----------------");
function optimizedApproch2(n) {
  let temp = Array(n + 1).fill(true);

  for (let i = 2; i * i <= n; i++) {
    if (temp[i]) {
      for (let j = i * i; j <= n; j = j + i) {
        temp[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (temp[i]) {
      process.stdout.write(i + " ");
    }
  }
}

optimizedApproch2(15);
console.log();
console.log("------------- optimizedApproach2 -----------------");

function optimizedApproach3(n) {
  let temp = Array(n + 1).fill(true);
  for (let i = 2; i <= n; i++) {
    if (temp[i]) {
      process.stdout.write(i + " ");
      for (let j = i * i; j <= n; j = j + i) {
        temp[j] = false;
      }
    }
  }
}

optimizedApproach3(15);

// T.C = O(n*log(logn)) // proof is so long so just accept for now
