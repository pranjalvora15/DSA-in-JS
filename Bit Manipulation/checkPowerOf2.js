function naiveApproach(n){
    if(n===0){
        return false
    }
    while(n!==1){
        if(n%2!==0) return false
        n = parseInt(n/2)
    }
    return true
}

console.log(naiveApproach(5));
console.log(naiveApproach(32));

// T.C = O(n)

// optimized solution
// // Brain Kerningam's Algorithm

function optimizedApproach(n){
    if(n===0) return false

    return (n & (n-1)) === 0

    //  or remove if condition and do return (n && (n & (n-1))===0)
}