function factorial(num){
    let i=2
    let ans=1
    for(i;i<=num;i++){
        ans = ans * i
    }
    return ans
}

console.log(factorial(4));

//T.C = O(n)