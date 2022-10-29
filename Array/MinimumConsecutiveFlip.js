// optimized Approach
function MinimumConsecutiveFlip(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] !== arr[i]) {
      if (arr[i] !== arr[0]) {
        process.stdout.write("From " + i + " to");
      } else {
        process.stdout.write(" " + (i - 1));
        console.log();
      }
    }
  }
  if (arr[n - 1] !== arr[0]) {
    process.stdout.write(" " + (n - 1));
  }
}

MinimumConsecutiveFlip([0, 0, 1, 1, 0, 0, 1, 1, 0]);
MinimumConsecutiveFlip([0, 0, 1, 1, 0, 0, 1, 1, 0, 1]);
