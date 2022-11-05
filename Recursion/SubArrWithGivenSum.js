function CountSubArrWithGivenSum(arr,n,sum){
    if(n===0){
        return sum===0 ? 1:0
    }
    return CountSubArrWithGivenSum(arr,n-1,sum) + CountSubArrWithGivenSum(arr,n-1,sum-arr[n-1])
}

console.log(CountSubArrWithGivenSum([4, 8, 12, 5], 4,17));

//T.C = Theta(2^n)