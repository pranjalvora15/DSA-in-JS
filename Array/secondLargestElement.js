function firstLargest(arr) {
  let n = arr.length;
  // let max=Number.MIN_VALUE;
  let index = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[index]) {
      // max=arr[i]
      index = i;
    }
  }
  return index;
}

// naive Approach

function naiveApproach(arr) {
  let n = arr.length;
  const firstLargestElement = firstLargest(arr);
  let index = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== arr[firstLargestElement]) {
      if (index === -1) {
        index = i;
      } else {
        if (arr[i] > arr[index]) {
          index = i;
        }
      }
    }
  }
  return index;
}

console.log(
  "second largest element is at index ",
  naiveApproach([10, 15, 11, 30, 4, 3])
);
console.log("will return -1 as there is no second largest element ", naiveApproach([6, 6, 6, 6]));

// T.C = O(n)

function betterApproach(arr){
    let n=arr.length
    let largestIndex = 0
    let secondLargestIndex = -1
    for(let i=0;i<n;i++){
        if(arr[i]>arr[largestIndex]){
            secondLargestIndex=largestIndex
            largestIndex = i
        }else{
            if(arr[i]!==arr[largestIndex]){
                if(secondLargestIndex===-1 || arr[i]>arr[secondLargestIndex]){
                    secondLargestIndex = i
                }
            }
        }

    }
    return secondLargestIndex
}


console.log("second largest element is at index ", betterApproach([10, 15, 11, 30, 4, 51]));
console.log("will return -1 as there is no second largest element ", betterApproach([6, 6, 6, 6]));