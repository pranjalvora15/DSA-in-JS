// optimized approach
function optimizedApproach(s1, s2) {
  let n1 = s1.length;
  let n2 = s2.length;
  let i = 0;
  let j = 0;
  // if s2 is bigger string then s1
  if (n1 < n2) return false;
  while (i < n1 && j < n2) {
    if (s1[i] === s2[j]) {
      j++;
    }
    i++;
  }
  return j === n2;
}

console.log(optimizedApproach("ABCDEF", "ADE"));

// T.C = O(n1+n2), S.C = O(1)

// recursive solution

function recursiveSol(s1, s2, n, m) {
  // order of if condition is important here
  if (m === 0) return true;
  if (n === 0) return false;
  if (s1[n - 1] === s2[m - 1]) {
    return recursiveSol(s1, s2, n - 1, m - 1);
  } else {
    return recursiveSol(s1, s2, n - 1, m);
  }
}

console.log(optimizedApproach("ABCDEF", "ADE"));

// T.C = O(m+n), S.C = O(m+n)
