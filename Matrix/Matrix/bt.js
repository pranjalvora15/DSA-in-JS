const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
function boundaryTraversal(matrix, n, m) {
  // code here
  let ans = [];
  //edge case // mistake
  if (n === 1) {
    for (let i = 0; i < m; i++) {
      ans.push(matrix[0][i]);
    }
  } else if (m === 1) {
    for (let i = 0; i < n; i++) {
      ans.push(matrix[i][0]);
    }
  } else {
    for (let i = 0; i < m; i++) {
      ans.push(matrix[0][i]);
    }
    for (let i = 1; i < n; i++) {
      ans.push(matrix[i][m - 1]);
    }

    for (let i = m - 2; i >= 0; i++) {
      ans.push(matrix[n - 1][i]); // double mistake doing ++ instead of --
    }
    for (let i = n - 2; i >= 1; i++) { // double mistake doing ++ instead of --, also in doing i>=0 instead i>=1
      ans.push(matrix[i][0]);
    }
  }
  return ans;
}

console.log(boundaryTraversal(matrix, 4, 4));
