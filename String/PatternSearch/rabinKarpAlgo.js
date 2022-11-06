function rabinKarpAlgo(pattern, txt) {
  const n = txt.length;
  const m = pattern.length;
  let h = 1;
  for (let i = 1; i <= m - 1; i++) {
    h = (h * d) % q; // q is large prime number
  }

  let p = 0;
  let t = 0;
  for (let i = 0; i < m; i++) {
    p = (p * d + pattern[i]) % q;
    t = (txt * d + txt[i]) % q;
  }

  for (let i = 0; i <= m - n; i++) {
    if (p === t) {
      let flag = true;
      for (let j = 0; j < m; j++) {
        if (pattern[j] !== txt[i + j]) {
          flag = false;
          break;
        }
      }
      if (flag === true) {
        process.stdout.write(i + " ");
      }
    }
    if (i < n - m) {
      t = (d * (t = txt[i] * h) + txt[i + m]) % q;
      if (t < 0) {
        t = t + q;
      }
    }
  }
}
