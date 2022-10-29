const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// const matrix = [[1, 2, 3, 4]]; // one row
// const matrix = [[1], [5], [9], [13]];  // one column

function boundaryTraversal(matrix) {
  //covering edge case
  const row = matrix.length;
  const col = matrix[0].length;
  console.log(col);
  if (row === 1) {
    for (let i = 0; i < col; i++) {
      process.stdout.write(matrix[0][i] + " ");
    }
  } else if (col === 1) {
    for (let i = 0; i < row; i++) {
      process.stdout.write(matrix[i][0] + " ");
    }
  } else {
    for (let i = 0; i < col; i++) {
      process.stdout.write(matrix[0][i] + " ");
    }
    for (let i = 1; i < row; i++) {
      process.stdout.write(matrix[i][col - 1] + " ");
    }
    for (let i = col - 2; i >= 0; i--) {
      process.stdout.write(matrix[row - 1][i] + " ");
    }
    for (let i = row - 2; i >= 1; i--) {
      process.stdout.write(matrix[i][0] + " ");
    }
  }
}

boundaryTraversal(matrix);
