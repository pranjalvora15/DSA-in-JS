function naiveApproach(a,b){
    let ans = Math.max(a,b)
    while(true){
        if(ans % a === 0 && ans % b === 0){
            return ans
        }
        ans++
    }
    
}

console.log(naiveApproach(4,6));

//T.C - O(a*b - max(a,b))

//-------------------- Optimized Solution------------------------------

function gcd(a,b){
    // base case
    if(b === 0){
        return a
    }
    return gcd(b, a % b)
}

function lcd(a,b){
    //formula - a * b =  gcd(a,b) * lcd(a,b)
    return (a * b) / gcd(a,b)

}

console.log(lcd(4,6));

// T.C = O(log(min(a,b)) 