function naiveApproach(arr) {
  let n = arr.length;
  let temp;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      for (let j = i + 1; j < n; j++) {
        if (arr[j] !== 0) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
  return arr;
}

console.log(naiveApproach([1, 2, 0, 0, 3, 5, 0, 4, 6]));
console.log(naiveApproach([0, 0, 0, 0, 0, 10]));
console.log(naiveApproach([15, 0, 0, 0, 0, 0]));
console.log(naiveApproach([1, 2, 3, 4, 5]));

// T.C = O(n^2)

function optimizedApproach(arr) {
  let n = arr.length;
  let i = 0;
  let j = 0;
  let temp;
  while (j < n) {
    if (arr[j] !== 0) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
    j++;
  }
  return arr;
}

console.log(optimizedApproach([1, 2, 0, 0, 3, 5, 0, 4, 6]));
console.log(optimizedApproach([0, 0, 0, 0, 0, 10]));
console.log(optimizedApproach([15, 0, 0, 0, 0, 0]));
console.log(optimizedApproach([1, 2, 3, 4, 5]));

// T.C = O(n), S.C = O(1)
