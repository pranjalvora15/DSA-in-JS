function naiveApproch(x, n) {
  let ans = 1;
  for (let i = 0; i < n; i++) {
    ans = ans * x;
  }
  return ans;
}

console.log(naiveApproch(2, 4));

// T.C = O(n), S.C = O(1)

console.log("------------- optimizedApproach -----------------");

function optimizedPower(x, n) {
  if (n === 0) return 1;
  let temp;
  temp = optimizedPower(x, parseInt(n / 2));
  temp = temp * temp;
  if (n % 2 === 0) {
    return temp;
  } else {
    return temp * x;
  }
}

console.log(optimizedPower(3,5));

//  T.C = O(log(n)), S.C = O(log(n))