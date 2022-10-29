// here array may be sorted in increasing or decreasing order
// sorted array will not be considered as sorted and rotated array as there is no rotation of that array
// that means array should be rotated at least one time

function checkSortedAndRotatedII(arr) {
  let n = arr.length;
  let countInc = 0;
  let countDec = 0;
  let flagI = 0;
  let flagD = 0;
  // check if array is already sorted in ascending order or not
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] < arr[i]) flagI++;
  }

  // if array is already sorted in ascending order then return false
  if (flagI === n - 1) return false;

  // check if array is already sorted in descending order or not
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] > arr[i]) flagD++;
  }

  // if array is already sorted in descending order then return false
  if (flagD === n - 1) return false;

  // checking for rotated sorted array
  // check normal problem of check array sorted and rotated to understand this logic
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] > arr[i]) countInc++;

    if (arr[i - 1] < arr[i]) countDec++;
  }

  if (arr[n - 1] > arr[0]) countInc++;

  if (arr[n - 1] < arr[0]) countDec++;

  if (countInc === 1) return true;
  if (countDec === 1) return true;
}

console.log(checkSortedAndRotatedII([3, 4, 5, 1, 2]));
console.log(checkSortedAndRotatedII([1, 2, 3, 4, 5]));
console.log(checkSortedAndRotatedII([5, 4, 3, 2, 1]));
console.log(checkSortedAndRotatedII([10, 18, 15]));

// T.C = O(n), S.C = O(1)
