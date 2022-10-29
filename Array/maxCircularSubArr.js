function naiveApproach(arr) {
  let n = arr.length;
  let ans = arr[0];
  for (let i = 0; i < n; i++) {
    let currSum = arr[i];
    let currMax = arr[i];
    for (let j = 1; j < n; j++) {
      let index = (i + j) % n;
      currSum += arr[index];
      currMax = Math.max(currMax, currSum);
    }
    ans = Math.max(ans, currMax);
  }
  return ans;
}

console.log(naiveApproach([5, -2, 3, 4]));

// T.C = O(n^2), S.C = O(n)

//optimized Approach

// Kadane's Algorithm to find max sum sub array
function normalMaxSumSubArr(arr) {
  let n = arr.length;
  let ans = arr[0];
  let currAns = arr[0];
  for (let i = 1; i < n; i++) {
    currAns = Math.max(currAns + arr[i], arr[i]);
    ans = Math.max(ans, currAns);
  }
  return ans;
}

function finalSumSubArr(arr) {
  let n = arr.length;
  let maxOfNormalArr = normalMaxSumSubArr(arr);
  if (maxOfNormalArr < 0) {
    return maxOfNormalArr;
  }
  let totalSumOfArr = 0;
  for (let i = 0; i < n; i++) {
    totalSumOfArr += arr[i];
    arr[i] = -arr[i];
  }

  let maxCircular = totalSumOfArr + normalMaxSumSubArr(arr);
  return Math.max(maxCircular, maxOfNormalArr);
}

console.log(finalSumSubArr([8, -4, 3, -5, 4]));

// T.C = Theta(n+n+n)=> Theta(n), S.C = O(1)
