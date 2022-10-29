// approach 1
function naiveAppraoch(arr) {
  let n = arr.length;
  let flag;
  for (let j = 1; j <= 1000000; j++) {
    for (let i = 0; i < n; i++) {
      if (j === arr[i]) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    if (flag === false) return j;
  }
}

console.log(naiveAppraoch([2, 3, -3, -2, -6, 1, 5]));
// T.C = O(n^2)

// approach 2
// sort array and then start from 1 to n in sorted array, in sorted array
// element will be like 1,2,3,4,5 and while traversing any element missing in
// sorted arr then that is the answer

function optimizedApproach1(arr) {
  let n = arr.length;
  // apply quick sort for T.C = O(nlogn), avoid below sorting
  arr.sort(function (a, b) {
    return a - b;
  });
  let index;
  for (index = 0; index < n; index++) {
    if (arr[index] <= 0) continue;
    else break;
  }
  let start = 1;
  for (index; index < n; index++) {
    if (start !== arr[index]) return start;
    else start++;
  }
}

console.log(optimizedApproach1([2, 3, -3, -2, -6, 1, 5]));

// T.C = O(nlogn), S.C = O(1)

// Approach3
function optimizedApproach2(arr) {
  let n = arr.length;
  const set1 = new Set();
  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      set1.add(arr[i]);
    }
  }
  let sizeOfSet = set1.size;
  for (let i = 1; i <= sizeOfSet; i++) {
    if (set1.has(i)) continue;
    else return i;
  }
  return sizeOfSet + 1;
}

console.log(optimizedApproach2([2, 3, -3, -2, -6, 1, 5]));

// T.C = O(n), S.C = O(n)

// Approach3
function segregate(arr){
    let n = arr.length;
    let j=0;
    for(let i=0;i<n;i++){
        if(arr[i]<0){
            let temp=arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            j++
        }
    }
    return j;
}

function findMissingPositive(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        let x=Math.abs(arr[i])
        if(x-1 < n && arr[x-1]>0){
            arr[x-1] = -arr[x-1]
        }
    }
    for(let i=0;i<n;i++){
        if(arr[i]>0) return i+1
    }
    return n+1
}

function missingNumber(arr){
    let n = arr.length;
    let shift = segregate(arr)
    let arr2 = new Array(n-shift)
    let j=0
    for(let i=shift;i<n;i++){
        arr[j] = arr[i]
        j++
    }
    return findMissingPositive(arr2)
}

console.log(missingNumber([2,1,-2,5,-6]));

 // T.C =  O(n), S.C = Theta(n)
