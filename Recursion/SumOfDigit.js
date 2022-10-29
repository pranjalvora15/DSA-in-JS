function sumOfDigit(n){
    if(n<=9) return n
    return n%10 + sumOfDigit(parseInt(n/10))
}

console.log(sumOfDigit(12345));

// T.C = Theta(d) , S.C = Theta(d) 