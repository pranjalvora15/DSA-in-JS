function naiveApproach(text, pattern) {
  let n = text.length;
  let m = pattern.length;

  for (let i = 0; i <= n - m; i++) {
    let j;
    for (j = 0; j < m; j++) {
      if (pattern[j] !== text[i + j]) {
        break;
      }
    }
    if (j === m) {
      process.stdout.write(i + " ");
    }
  }
}

naiveApproach("geeksforgeeks", "eks");
console.log();
naiveApproach("AAAAAAA", "AAA");

// T.C = O((n-m+1)*m)
