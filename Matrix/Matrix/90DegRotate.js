const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function nintyDegRotate(matrix) {
  // first do transpose of matrix
  let n = matrix.length;
  let temp;
  for (let row = 0; row < n; row++) {
    for (let col = row + 1; col < n; col++) {
      temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
  // reverse column
  for (let col = 0; col < n; col++) {
    let low = 0;
    let high = n - 1;
    while (low < high) {
      temp = matrix[low][col];
      matrix[low][col] = matrix[high][col];
      matrix[high][col] = temp;
      low++;
      high--;
    }
  }
  // print matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write(matrix[i][j] + " ");
    }
    console.log();
  }
}

nintyDegRotate(matrix);
