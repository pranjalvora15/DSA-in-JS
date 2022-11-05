function ropeCutting(n,a,b,c){
    if(n===0) return 0;
    if(n < 0) return -1;

    let ans = max(ropeCutting(n-a,a,b,c),ropeCutting(n-b,a,b,c),ropeCutting(n-c,a,b,c))

    if(ans === -1) return -1;

    return ans + 1
}

console.log(ropeCutting(23,11,9,12));

// T.C = O(3^n)