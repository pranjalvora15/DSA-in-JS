const matrix = [
  [6, 5, 4],
  [1, 2, 5],
  [7, 9, 7],
];

function upperTriangle(matrix) {
  let n = matrix.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}
function lowerTriangle(matrix) {
  let n = matrix.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

console.log(upperTriangle(matrix));
console.log(lowerTriangle(matrix));
