function optimizedApproach(arr){
    let n=arr.length;
    let x=0
    for(let i=0;i<n;i++){
        x=x^arr[i]
    }

    let k = x & (~(x-1))
    let res1 = 0
    let res2 = 0
    for(let i=0;i<n;i++){
        if((arr[i] & k)!==0){
            res1 = res1 ^ arr[i]
        }else{
            res2 = res2 ^ arr[i]
        }
    }
    console.log(res1,res2);
}

optimizedApproach([1,6,5,6,6,1])

// T.C = Theta(n), S.C = O(1)