function naiveApproach(arr, sum) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let currSum = 0;
    for (let j = i; j < n; j++) {
      currSum += arr[i];
      if (currSum === sum) return true;
    }
  }
  return false;
}

console.log(naiveApproach([3, 2, 0, 4, 7], 6));

// T.C = O(n^2)

function optimizedApproach(arr, sum) {
  let n = arr.length;
  let start = 0;
  let currSum = 0;
  for (let end = 0; end < n; end++) {
    currSum += arr[end];
    while (currSum > sum) {
      console.log(currSum);
      currSum = currSum - arr[start];
      start++;
    }
    if (currSum === sum) return true;
  }
  return false;
}

console.log(optimizedApproach([4, 8, 12, 5], 17));

// we are removing or adding element atmost once
// T.C = O(n+n)=> O(n), S.C = O(1)
