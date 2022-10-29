// this is Josephus Problem
function findTheSafePosition(arr, k, index) {
  // base case
  if (arr.length === 1) {
    return arr[0];
  }

  index = (index + k - 1) % arr.length;

  arr.splice(index, 1);

  return findTheSafePosition(arr, k, index);
}

// console.log(findTheSafePosition());

// T.C  = O(N), S.C = O(N)

function main(n, k) {
  let arr = new Array(n);
  for (let i = 1; i <= n; i++) {
    // arr contains 1 to n integer
    arr[i - 1] = i;
  }

  return findTheSafePosition(arr, k, 0);
}

console.log(main(6, 2));
console.log(main(7, 3));
console.log(main(5, 2));
