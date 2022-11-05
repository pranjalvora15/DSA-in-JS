// n start from 0 not from 1
function josephusProblem(n,k){
    if(n===1){
        return 0
    }else{
        return ((josephusProblem(n-1,k)) + k ) % n
    }
}

// T.C = Theta(n) , S.C = Theta()

// What if n start from 1
// simple call josephusProblem(n,k) and at last return plus 1 to the answer of josephusProblem(n,k)