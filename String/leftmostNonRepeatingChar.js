function naiveApproach(str) {
  let n = str.length;
  for (let i = 0; i < n; i++) {
    let flag = false;
    for (let j = 0; j < n; j++) {
      if (i !== j && str[i] === str[j]) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      return i;
    }
  }
  return -1;
}

console.log(naiveApproach("abccbd"));
// T.C = O(n^2) , S.C = O(1)

function optimizedApproach(str) {
  const NO_OF_CHARS = 256;
  let n = str.length;
  //   let count = new Array(NO_OF_CHARS);
  let count = Array(NO_OF_CHARS).fill(0);
  for (let i = 0; i < n; i++) {
    count[str.charCodeAt(i)]++;
  }

  for (let i = 0; i < n; i++) {
    if (count[str.charCodeAt(i)] === 1) return i;
  }
  return -1;
}

console.log(optimizedApproach("abccbd"));
console.log(optimizedApproach("abcbdcad"));

// T.C = Theta(n + NO_OF_CHARS ) , S.C = Theta(NO_OF_CHARS)

function optimizedApproach2(str) {
  const NO_OF_CHARS = 256;
  let n = str.length;
  let fI = Array(NO_OF_CHARS).fill(-1);
  for (let i = 0; i < n; i++) {
    if (fI[str.charCodeAt(i)] === -1) {
      fI[str.charCodeAt(i)] = i;
    } else {
      fI[str.charCodeAt(i)] = -2;
    }
  }
  let res = Number.MAX_VALUE;
  for (let i = 0; i < NO_OF_CHARS; i++) {
    if (fI[i] >= 0) {
      res = Math.min(res, fI[i]);
    }
  }
  return (res = Number.MAX_VALUE ? -1 : res);
}

console.log(optimizedApproach1("abbcbda"));

// T.C = O(n) , S.C = Theta(NO_OF_CHARS)
