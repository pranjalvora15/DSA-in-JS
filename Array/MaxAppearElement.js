function naiveApproach(leftArr, rightArr) {
  let n = leftArr.length;
  let freq = Array(100).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = leftArr[i]; j <= rightArr[i]; j++) {
      freq[j] += 1;
    }
  }
  let res = 0;
  for (let i = 1; i < 100; i++) {
    if (freq[i] > freq[res]) {
      res = i;
    }
  }
  //   console.log(freq[4]);
  return res;
}

console.log(naiveApproach([1, 2, 4], [4, 5, 7]));

// T.C = O(n*MAX) where MAX=100, S.C = O(1)

// Solution using Prefix Sum
function optimizedApproach(leftArr, rightArr) {
  let n = leftArr.length;
  let freq = Array(101).fill(0);
  for (let i = 0; i < n; i++) {
    freq[leftArr[i]]++;
    freq[rightArr[i] + 1]--;
  }
  let res = 0;

  for (let i = 1; i < 100; i++) {
    freq[i] = freq[i - 1] + freq[i];
    if (freq[i] > freq[res]) {
      res = i;
    }
  }
  return res;
}

console.log(optimizedApproach([1, 2, 4], [4, 5, 7]));

// T.C = O(n + MAX) where MAX=100, S.C = O(1)
