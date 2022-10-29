// here you can buy and sell stock as many time as you want
// but before buying make sure to sell the last bought stock

function BuyAndSellStockII(arr) {
  let n = arr.length;
  let profit = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      profit = profit + (arr[i] - arr[i - 1]);
    }
  }
  return profit
}

console.log(BuyAndSellStockII([5,2,6,1,4,7,3,6]));

// T.C = O(N)
