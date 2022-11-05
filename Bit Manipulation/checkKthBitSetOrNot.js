function naiveApproach(n, k) {
  let a = 1;
  for (let i = 0; i < k - 1; i++) {
    a = a * 2;
  }
  if ((n & a) !== 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

naiveApproach(5, 3);

// T.C = Theta(n)

function optimizedApproach(n, k) {
  let a = 1 << (k - 1); // 2^(k-1)

  if ((n & a) !== 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

optimizedApproach(5, 3);
optimizedApproach(5, 2);

// T.C = O(1)
