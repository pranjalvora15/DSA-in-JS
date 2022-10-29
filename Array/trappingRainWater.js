function naiveApproach(arr) {
  let n = arr.length;
  let trappedWater = 0;
  // you can never trap water on left most and right most bar
  for (let i = 1; i < n - 1; i++) {
    // try to find max left most bar from current bar
    // at starting lmax will our current bar only
    let lmax = arr[i];
    for (let j = 0; j < i; j++) {
      lmax = Math.max(lmax, arr[j]);
    }
    // similarly find out rmax for the current bar
    let rmax = arr[i];
    for (let j = i + 1; j < n; j++) {
      rmax = Math.max(rmax, arr[j]);
    }

    // now trapped water is equal to minimum of lmax and rmax minus arr[i]
    trappedWater = trappedWater + Math.min(lmax, rmax) - arr[i];
  }
  return trappedWater;
}

console.log(naiveApproach([3, 0, 1, 2, 5]));

// T.C = Theta(n^2), S.C = O(1)

// optimized solution

function optimizedApproach(arr) {
  let n = arr.length;
  let trappedWater = 0;
  let lmax = Array(n).fill(0);
  let rmax = Array(n).fill(0);
  lmax[0] = arr[0];
  rmax[n - 1] = arr[n - 1];
  // try to find max left most bar for every bar
  for (let i = 1; i < n; i++) {
    lmax[i] = Math.max(lmax[i - 1], arr[i]);
  }

  // try to find max right most bar for every bar

  for (let i = n - 2; i >= 0; i--) {
    rmax[i] = Math.max(rmax[i + 1], arr[i]);
  }

  // now trapped water for each bar is equal to minimum of lmax and rmax for that bar minus height of current bar
  // you can never trap water on left most and right most bar
  for (let i = 1; i < n - 1; i++) {
    trappedWater = trappedWater + Math.min(lmax[i], rmax[i]) - arr[i];
  }
  return trappedWater;
}

console.log(optimizedApproach([5, 0, 6, 2, 3]));

// T.C = Theta(n+n+n) => Theta(n), S.C = Theta(n)
