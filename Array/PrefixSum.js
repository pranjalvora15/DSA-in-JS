function prefixSum(arr) {
  let n = arr.length;
  let prefixSum = Array(n).fill(0);
  prefixSum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  return prefixSum;
}

// let prefixSumArr = prefixSum([2, 8, 3, 9, 6, 5, 4]);
let prefixSumArr = prefixSum([2, 3, 5, 4, 6, 1]);

function getSum(left, right) {
  if (left === 0) return prefixSumArr[right];
  return prefixSumArr[right] - prefixSumArr[left - 1];
}

console.log(getSum(1, 5));

//------------------------------------------------------------
function prefixSum2(arr) {
  let n = arr.length;
  let prefixSum = Array(n).fill(0);
  prefixSum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = (i + 1) * arr[i] + prefixSum[i - 1];
  }
  return prefixSum;
}

let prefixSumArr2 = prefixSum2([2, 3, 5, 4, 6, 1]);
console.log(prefixSumArr2);
function getWeightedSum(left, right) {
  if (left === 0) return prefixSumArr2[right];
  return prefixSumArr2[right] - (left - 1) * getSum(left, right);
}

console.log(getWeightedSum(1, 3)); // 3+10+12=>25
