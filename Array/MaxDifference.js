function naiveAppraoch(arr) {
  let maxDiff = Number.MIN_VALUE;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      maxDiff = Math.max(maxDiff, arr[j] - arr[i]);
    }
  }
  return maxDiff;
}

console.log(naiveAppraoch([2,3,10,6,4,8,1]));

// T.C. = O(n^2)

function optimizedApproach(arr){
    let n=arr.length
    let ans=arr[1]-arr[0]
    let minValueSoFar = arr[0]
    for(let j=1;j<n;j++){
        ans = Math.max(ans,arr[j]-minValueSoFar)
        minValueSoFar = Math.min(minValueSoFar,arr[j])
    }
    return ans
}

console.log(optimizedApproach([2,3,10,6,4,8,1]));

// T.C = O(n)