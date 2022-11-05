function powerSetUsingBitwise(str) {
  let n = str.length;
  let powerSetSize = 1 << n;
  for (let i = 0; i < powerSetSize; i++) {
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        process.stdout.write(str[j]);
      }
    }
    console.log();
  }
}

powerSetUsingBitwise("abc");

// T.C = O(2^n), S.C = O(1)
