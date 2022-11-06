function naiveApproach(s1, s2) {
  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");
  return s1 === s2;
}

console.log(naiveApproach("listen", "silent"));

// T.C = O(nlogn), S.C = Theta(Max of length of s1 and s2)

// optimized solution
function optimizedApproach(s1, s2) {
  const NO_OF_CHARS = 256;
  if (s1.length !== s2.length) return false;

  let count = Array(NO_OF_CHARS).fill(0);

  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i)]++;
    count[s2.charCodeAt(i)]--;
  }

  for (let i = 0; i < NO_OF_CHARS; i++) {
    if (count[i] !== 0) return false;
  }
  return true;
}

console.log(optimizedApproach("internal", "triangle"));
console.log(optimizedApproach("integral", "triangle"));
console.log(optimizedApproach("listen", "silent"));

// T.C = O(n), S.C = Theta(NO_OF_CHARS)
