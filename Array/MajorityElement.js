function naiveApproach(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        let count=1
        for(let j=i+1;j<n;j++){
            if(arr[i]===arr[j]) count++
        }
        if(count > parseInt(n/2)) return i
    }
    return -1
}

// returns any index of majotity element
console.log(naiveApproach([8,7,6,8,6,6,6,6]));

// T.C =O(n^2)

// optimized solution
// Moore's voting Algorithm
function findMajority(arr){
    let n= arr.length
    let ansIndex = 0;
    let count=1
    for(let i=1;i<n;i++){
        if(arr[ansIndex]===arr[i]) count++
        else count--
        if(count === 0){
            ansIndex = i
            count=1
        }
    }
    count=0;
    for(let i=0;i<n;i++){
        if(arr[ansIndex]===arr[i]) count++
    }
    if(count<=parseInt(n/2)) return -1
    return ansIndex
}


console.log(findMajority([8,8,6,6,6,4,6]));

// T.C = O(n), S.C = O(1)