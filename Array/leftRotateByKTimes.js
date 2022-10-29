// Approach One
function leftRotateByOne(arr) {
  let n = arr.length;
  let temp = arr[0];

  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;
  return arr;
}

function leftRotate(arr, k) {
  for (let i = 0; i < k; i++) {
    leftRotateByOne(arr);
  }
  return arr;
}

console.log(leftRotate([1, 2, 3, 4, 5], 2));

// T.C = Theta(n*k), S.C = Theta(1)

// Approach 2

function approach2(arr, k) {
  let n = arr.length;
  let temp = [];

  // copying all elements upto k from array
  for (let i = 0; i < k; i++) {
    temp.push(arr[i]);
  }
  // rotating array from kth element
  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }
  // copying temp element starting from n-k position
  for (let i = 0; i < k; i++) {
    arr[n - k + i] = temp[i];
  }
  return arr;
}

console.log(approach2([1, 2, 3, 4, 5], 2));

// T.C Theta(k + n-k + k) => Theta(n+k), S.C = Theta(d)

// Aproach3
function approach3(arr, k) {
  let n = arr.length;
  // if k>n
  k=k%n
  revereseArr(arr, 0, k - 1);
  revereseArr(arr, k, n - 1);
  revereseArr(arr, 0, n - 1);
  return arr;
}

function revereseArr(arr, start, end) {
  let temp;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

console.log(approach3([1, 2, 3, 4, 5], 2));

// T.C = Theta(O(k + n-k + n)) => Theta(O(2n)) => Theta(n) , S.C = Theta(1)
