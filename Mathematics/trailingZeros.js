function trailingZero(n){
    let ans=0;
    for(let i=5;i<=n;i=i*5){
        ans = ans + parseInt(n/i)
    }
    return ans;
}

console.log(trailingZero(100));