function naiveApproach(a, b) {
  let res = Math.min(a, b);
  while (res > 0) {
    if (a % res === 0 && b % res === 0) {
      break;
    }
    res--;
  }
  return res;
}

// console.log(naiveApproach(100,200));

function euclideanAlgo(a, b) {
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

console.log(euclideanAlgo(10, 15));

function optimizedEuclideanAlgo(a, b) {
  //base case
  if (b === 0) {
    return a;
  }
  return optimizedEuclideanAlgo(b, a % b);
}

console.log(optimizedEuclideanAlgo(12, 15));
