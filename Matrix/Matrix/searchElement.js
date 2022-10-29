const matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];

// array is  sorted row and column wise
function searchElement(matrix, element) {
  //start from top right corner
  let n = matrix.length;
  let row = matrix.length;

  let i = 0;
  let j = n - 1;
  while (i < row && j >= 0) {
    if (matrix[i][j] === element) {
      process.stdout.write(`Found at ${i}th row and ${j}th column`);
      return;
    } else if (element < matrix[i][j]) {
      j--;
    } else {
      i++;
    }
  }
  console.log("Not Found");
}

searchElement(matrix, 40);
searchElement(matrix, 50);
searchElement(matrix, 27);
searchElement(matrix, 33);
searchElement(matrix, 31);
