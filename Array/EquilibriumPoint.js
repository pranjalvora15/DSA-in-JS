function naiveApproach(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < n; k++) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) return true;
  }
  return false;
}

console.log(naiveApproach([3, 4, 8, -9, 9, 7]));

// T.C = O(n^2), S.C = O(1)

function optimizedApproach(arr) {
  let n = arr.length;
  let total = 0;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < n; i++) {
    total += arr[i];
  }
  for (let i = 0; i < n; i++) {
    rightSum = total - leftSum - arr[i];
    console.log("left", leftSum);
    console.log("right", rightSum);
    if (leftSum === rightSum) return true;
    leftSum += arr[i];
  }
  return false;
}

console.log(optimizedApproach([3, 4, 8, -9, 9, 7]));

// T.C = O(n), S.C = O(1)
