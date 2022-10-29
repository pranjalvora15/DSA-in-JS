function naiveApproach(arr) {
  let n = arr.length;
  let ans = 1;
  for (let i = 0; i < n; i++) {
    let currAns = 1;
    for (let j = i + 1; j < n; j++) {
      if (
        (arr[j - 1] % 2 === 0 && arr[j] % 2 === 1) ||
        (arr[j - 1] % 2 === 1 && arr[j] % 2 === 0)
      ) {
        currAns++;
      } else {
        break;
      }
    }
    ans = Math.max(ans, currAns);
  }

  return ans;
}

console.log(naiveApproach([5, 10, 20, 6, 3, 8]));

// T.C = O(n^2), S.C =O(1)

// Kadane's algorithm
function optimizedApproach(arr) {
  let n = arr.length;
  let ans = 1;
  let currAns = 1;
  for (let i = 1; i < n; i++) {
    if (
      (arr[i - 1] % 2 === 0 && arr[i] % 2 === 1) ||
      (arr[i - 1] % 2 === 1 && arr[i] % 2 === 0)
    ) {
      currAns++;
      ans = Math.max(ans, currAns);
    } else {
      currAns = 1;
    }
  }
  return ans;
}

console.log(optimizedApproach([5, 10, 20, 6, 3, 8]));

// T.C =O(n), S.C = O(1)

// My solution with O(n)
// on base of fact even + even = even, odd + odd = odd, even + odd = odd

function mySolution(arr) {
  let n = arr.length;
  let ans = 1;
  let currAns = 1;
  for (let i = 1; i < n; i++) {
    if ((arr[i - 1] + arr[i]) % 2 === 1) {
      currAns++;
      ans = Math.max(ans, currAns);
    } else {
      currAns=1
    }
  }
  return ans;
}

console.log(mySolution([5, 10, 20, 6, 3, 8]));
