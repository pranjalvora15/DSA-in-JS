function countSetBit(n) {
  let count = 0;
  while (n > 0) {
    if (n & (1 !== 0)) count++;
    // or one can do count = count + (n & 1)
    n = n >> 1;
  }
  return count;
}

console.log(countSetBit(6));

// T.C = Theta(d), where d is no. of bits from last to MSB

// optimized appraoch
// Brain Kerningam's Algorithm
function optimizedApproach(n){
    let count=0;
    while(n>0){
        n = n & (n-1) 
        count++
    }
    return count
}

console.log(optimizedApproach(15));

// loop runs only equal to number of set bits