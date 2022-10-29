function naiveApproach(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      return i;
    }
  }
}

console.log(
  "largest element is at index",
  naiveApproach([10, 15, 11, 30, 4, 3])
);

// T.C = O(n^2)

function optimizedApproach(arr) {
  const n = arr.length;
  let max = Number.MIN_VALUE;
  let index = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  return index;
}

console.log(
  "largest element is at index",
  optimizedApproach([10, 15, 11, 30, 4, 51])
);
