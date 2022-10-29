function naiveApproach(arr){
    let n=arr.length;
    let ans=0;
    for(let i=0;i<n;i++){
        let currAns = 0
        for(let j=i;j<n;j++){
            if(arr[j]===1) currAns++
            else break
        }
        ans = Math.max(ans,currAns)
    }
    return ans
}

console.log(naiveApproach([0,1,1,1,0,1,1]));

// T.C = O(n^2), S.C = O(1)


function optimizedApproach(arr){
    let n=arr.length;
    let ans=0;
    let currAns = 0;
    for(let i=0;i<n;i++){
        if(arr[i]===0){
            currAns = 0
        }else{
            currAns++
            ans = Math.max(ans,currAns)
        }
    }
    return ans
}

console.log(optimizedApproach([0,1,1,0,1,1,1]));

// T.C = O(n), S.C = O(1)

