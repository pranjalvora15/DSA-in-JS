function naiveApproach(arr) {
  let n = arr.length;
  let ans = arr[0];
  for (let i = 0; i < n; i++) {
    let currAns = 0;
    for (let j = i; j < n; j++) {
      currAns += arr[j];
      ans = Math.max(ans, currAns);
    }
  }
  return ans;
}

console.log(naiveApproach([2, 3, -8, 7, -1, 2, 3]));

// T.C = O(n^2), S.C = O(1)

function optimizedApproach(arr) {
  let n = arr.length;
  let currAns = arr[0];
  let ans = arr[0];
  for (let i = 1; i < n; i++) {
    currAns = Math.max(currAns + arr[i], arr[i]);
    ans = Math.max(ans, currAns);
  }
  return ans;
}

console.log(optimizedApproach([-3, 8, -2, 4, -5, 6]));

// T.C = O(n), S.C = O(1)
