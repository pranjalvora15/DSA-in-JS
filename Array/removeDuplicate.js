function naiveApproach(arr) {
  let n = arr.length;
  let temp = [];

  // first element will be unique always
  temp.push(arr[0]);

  for (let i = 1; i < n; i++) {
    if (temp[temp.length - 1] !== arr[i]) {
      temp.push(arr[i]);
    }
  }
  arr=temp;
  return arr
}

console.log(naiveApproach([1,2,2,2,3,3,3,3,3,3]));

// T.C = O(n), S.C = O(n)

 function optimizedApproach(arr) {
  let i=0;
  let j=0;
  let n = arr.length
  while(j<n){
      if(arr[i]!==arr[j]){
          i++;
          arr[i]=arr[j]
          
      }
      j++;
  }
  return arr
};

console.log(optimizedApproach([0,0,1,1,1,2,2,3,3,4]));
console.log(optimizedApproach([1,2,3,4,5]));

// T.C = O(n), S.C = O(1)