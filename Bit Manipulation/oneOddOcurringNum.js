// there is always one odd occurring number in array
function oneOddOcurringNum(arr){
    let n=arr.length;
    let ans = 0
    for(let i=0;i<n;i++){
        ans=ans ^ arr[i]
    }
    return ans
}

console.log(oneOddOcurringNum([11,12,11,11,15,12,15]));

// T.C = O(n), S.C = O(1)