function reverseArray(arr) {
  let n = arr.length;
  let temp;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    //swap element at index i with element at index j
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

// T.C = O(n), S.C = O(1)

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(reverseArray([1, 2, 3, 4]));
