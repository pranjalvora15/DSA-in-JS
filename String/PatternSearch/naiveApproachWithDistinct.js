function naiveApproachWithDistinct(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  for (let i = 0; i <= n - m; ) {
    let j;
    for (j = 0; j < m; j++) {
      if (pattern[j] !== text[i + j]) {
        break;
      }
    }

    if (j === m) {
      process.stdout.write(i + " ");
    }
    if (j === 0) {
      i++;
    } else {
      i = i + j;
    }
  }
}

naiveApproachWithDistinct("ABCEABEFABCD", "ABCD");

// T.C = O(n), S.C = O(1)
