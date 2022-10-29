const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function transpose(matrix) {
  let temp;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
}

const transposeMatrix = transpose(matrix);

for (let i = 0; i < transposeMatrix.length; i++) {
  for (let j = 0; j < transposeMatrix.length; j++) {
    process.stdout.write(transposeMatrix[i][j] + " ");
  }
  console.log();
}
