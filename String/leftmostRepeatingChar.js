function naiveApproach(str) {
  let n = str.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (str[i] === str[j]) return i;
    }
  }
  return -1;
}

console.log(naiveApproach("geeksforgeeks"));
console.log(naiveApproach("abccb"));

// T.C = O(n^2), S.C = O(1)

function optimizedApproach1(str) {
  const NO_OF_CHARS = 256;
  let n = str.length;
  let count = Array(NO_OF_CHARS).fill(0);

  for (let i = 0; i < n; i++) {
    count[str.charCodeAt[i]]++;
  }

  for (let i = 0; i < NO_OF_CHARS; i++) {
    if (count[i] > 1) return i;
  }
  return -1;
}

console.log(naiveApproach("geeksforgeeks"));
console.log(naiveApproach("abccb"));

// T.C = O(n + NO_OF_CHARS) , S.C = Theta(NO_OF_CHARS)

function optimizedApproach2(str) {
  const NO_OF_CHARS = 256;
  let n = str.length;
  let fIndex = Array(NO_OF_CHARS).fill(-1);
  let res = Number.MAX_VALUE;
  for (let i = 0; i < n; i++) {
    let fi = fIndex[str.charCodeAt(i)];
    if (fi === -1) {
      fIndex[str.charCodeAt(i)] = i;
    } else {
      res = Math.min(res, fi);
    }
  }
  return res === Number.MAX_VALUE ? -1 : res;
}

console.log(optimizedApproach2("abccbd"));

// T.C = O(n) , S.C = Theta(NO_OF_CHARS)

function optimizedApproach3(str) {
  const NO_OF_CHARS = 256;
  let n = str.length;
  let visited = Array(NO_OF_CHARS).fill(false);
  let res = -1;
  for (let i = n; i >= 0; i--) {
    if (visited[str.charCodeAt(i)]) {
      res = i;
    } else {
      visited[str.charCodeAt(i)] = true;
    }
  }
  return res;
}

console.log(optimizedApproach3("abccbd"));
console.log(optimizedApproach3("abc"));

// T.C = O(n) , S.C = Theta(NO_OF_CHARS)
