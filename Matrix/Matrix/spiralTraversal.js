const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function spiralTraversal(matrix) {
  let left = 0;
  let right = matrix.length - 1;
  let bottom = matrix.length - 1;
  let top = 0;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      process.stdout.write(matrix[top][i] + " ");
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      process.stdout.write(matrix[i][right] + " ");
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        process.stdout.write(matrix[bottom][i] + " ");
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        process.stdout.write(matrix[i][left] + " ");
      }
      left++;
    }
  }
}

spiralTraversal(matrix);
