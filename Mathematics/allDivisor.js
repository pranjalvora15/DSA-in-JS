function naiveApproch(n) {
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
    }
  }
}

naiveApproch(15);

// T.C = O(n)
console.log();
console.log("-----------------------------");
function optimizedApproch(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
      if(i!==parseInt(n/i)){
        process.stdout.write(parseInt(n/i)+ ' ')
      }
    }
  }
}
// but not getting answer in sorted order
// T.C = O(square root(n))

optimizedApproch(15);

console.log();
console.log("-----------------------------");
// now consoling answer in sorted order
function sortedOptimizedApproch(n) {
  let i;
  for (i = 1; i * i < n; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
    }
  }
  for (; i >= 1; i--) {
    if (n % i === 0) {
        process.stdout.write(parseInt(n / i) + " ");
    }
  }
}

// T.C = O(square root(n))

sortedOptimizedApproch(15);
