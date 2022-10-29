function naiveApproach(arr) {
  let n = arr.length;
  let maxProfit = 0;
  // loop to buy stock
  for (let buy = 0; buy < n - 1; buy++) {
    // loop to sell stock
    for (let sell = buy + 1; sell < n; sell++) {
      maxProfit = Math.max(maxProfit, arr[sell] - arr[buy]);
    }
  }
  return maxProfit;
}

console.log(naiveApproach([3, 1, 4, 8, 7, 2, 5]));

// T.C = O(n^2), S.C = O(1)

// optimized solution 1
function optimizedSol1(arr) {
  let n = arr.length;
  let maxProfit = 0;
  let maxFutureValue = 0;
  let temp = Array(n).fill(0);
  // find max value of stock from the day stock was bought
  for (let i = n - 1; i >= 0; i--) {
    temp[i] = Math.max(maxFutureValue, arr[i]);
    maxFutureValue = Math.max(maxFutureValue, arr[i]);
  }
  // now calculate profit by calculating difference between buying a stock from particular day and
  //max future value that will come in near future from that day
  for (let i = 0; i < n; i++) {
    maxProfit = Math.max(maxProfit, temp[i] - arr[i]);
  }
  return maxProfit;
}

console.log(optimizedSol1([3, 1, 4, 8, 7, 2, 5]));

// T.C = O(N) , S.C = O(N)

// optimized solution 2
function optimizedSol2(arr) {
  let n = arr.length;
  let minValueOfStockSofar = Number.MAX_VALUE;
  let maxProfit = 0;

  for (let i = 0; i < n; i++) {
    minValueOfStockSofar = Math.min(minValueOfStockSofar, arr[i]);
    maxProfit = Math.max(maxProfit, arr[i] - minValueOfStockSofar);
  }

  return maxProfit;
}

console.log(optimizedSol2([3, 1, 4, 8, 7, 2, 5]));

// T.C = O(N), S.C = O(1)
