function naiveApproach(arr, k) {
  let n = arr.length;
  let maxSum = Number.MIN_VALUE;
  for (let i = 0; i + k - 1 < n; i++) {
    let currSum = 0;
    for (let j = 0; j < k; j++) {
      currSum += arr[i + j];
    }
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

console.log(naiveApproach([1, 8, 30, -5, 20, 7], 3));
console.log(naiveApproach([5, -10, 6, 90, 3], 2));

// T.C = O(n*k), S.C = O(1)

function optimizedApproach(arr, k) {
  let n = arr.length;
  let currSum = 0;
  for (let i = 0; i < k; i++) {
    currSum += arr[i];
  }
  let maxSum = currSum;
  for (i = k; i < n; i++) {
    currSum = currSum + arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

console.log(optimizedApproach([1, 8, 30, -5, 20, 7], 4));

// T.C =Theta(n), S.C = O(1)
