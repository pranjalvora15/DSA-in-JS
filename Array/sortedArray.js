// check whether array is non-decreasing order or not

function naiveApproach(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(naiveApproach([5, 15, 20, 50, 100]));
console.log(naiveApproach([5, 15, 10, 50, 100]));
console.log(naiveApproach([15]));

// T.C = O(n^2)

function optimizedApproach(arr){
    let n =arr.length
    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}

console.log(optimizedApproach([5, 15, 20, 50, 100]));
console.log(optimizedApproach([5, 10, 12, 6, 20]));
console.log(optimizedApproach([15]));

// T.C = O(n)