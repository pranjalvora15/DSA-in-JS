function naiveAppraoch(arr){
    let n= arr.length
    for(let i=0;i<n;i++){
        let flag=true
        for(let j=i+1;j<n;j++){
            if(arr[i]<=arr[j]){
                flag=false
                break
            }
        }
        if(flag){
            console.log(arr[i])
        }
    }
}

naiveAppraoch([7,10,4,10,6,5,2])

// T.C = O(n^2)

//optimized Approach

function optimizedApproach(arr){
    let n=arr.length
    currentLeader = arr[n-1]
    for(let i=n-2;i>=0;i--){
        if(arr[i]>currentLeader){
            currentLeader=arr[i]
            console.log(currentLeader);
        }
    }
}

optimizedApproach([7,10,4,10,6,5,2])

// T.C = Theta(n), here your answer will get console in reverse order, to console answer in normal order
// create array then store currentLeader in that array and then console that array in reverse

