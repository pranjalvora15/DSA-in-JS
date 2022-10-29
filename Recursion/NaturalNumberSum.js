function SumOfNNatutalNumber(n){
    if(n===0) return 0;
    return n + SumOfNNatutalNumber(n-1)
}

console.log(SumOfNNatutalNumber(10));

// T.C = Theta(n), S.C = Theta(n) 