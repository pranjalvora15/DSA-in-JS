const matrix = [
  [5, 10, 20, 30, 40],
  [1, 2, 3, 4, 6],
  [11, 13, 15, 17, 19],
];

function binaryMedian(row, col, m) {
  let min = m[0][0];
  let max = m[0][col - 1];
  for (let i = 0; i < row; i++) {
    if (m[i][0] < min) {
      min = m[i][0];
    }
    if (m[i][col - 1] > max) {
      max = m[i][col - 1];
    }
  }
  let desired = parseInt((row * col + 1) / 2);
  // binary search algo
  while (min < max) {
    // var mid = min + parseInt((max - min) / 2);
    var mid = min + Math.floor((max - min) / 2);
    var midKiPosition = 0;

    console.log("------------------------------");
    // process.stdout.write("min " + min + " max " + max);
    console.log("min", min, " max ", max);
    console.log("mid", mid);
    //Find count of elements smaller than or equal to mid
    for (let i = 0; i < row; i++) {
      let get = 0;
      let temp = GetRow(m, i);
      let j = temp.length - 1;
      for (j; j >= 0; j--) {
        if (temp[j] <= mid) {
          get = j + 1;
          break;
        }
      }
      // if no element is smaller than mid for current row get should be equal to col
      // if(j===-1){

      // }
      // if (get === 0) {
      //   // console.log('inside if');
      //   get = col;
      // }
      //if element smaller than mid found in current row
      midKiPosition = midKiPosition + get;
      // process.stdout.write(get + " + ");
      //set get to zero as JS behaves in that way, once variable created in for loop it won't create again
      // get=0
      // console.log('get',get);
    }
    console.log();
    console.log("midpos", midKiPosition);
    if (midKiPosition < desired) {
      min = mid + 1;
    } else {
      max = mid;
    }
    // get=0
  }
  return min;
}

function GetRow(m, row) {
  let rowKiLength = matrix[0].length;
  let tempRow = Array(rowKiLength).fill(0);
  for (let i = 0; i < rowKiLength; i++) {
    tempRow[i] = m[row][i];
  }
  return tempRow;
}

const ans = binaryMedian(3, 5, matrix);
console.log(ans);
