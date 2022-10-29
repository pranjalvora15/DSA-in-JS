const matrix1 = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]
const matrix2 = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]



function additionOfMatrix(matrix1, matrix2) {
    let row = matrix1.length
    let col = matrix2.length
    let ansArr = []
    for(let i=0;i<row;i++){
        ansArr.push(Array(col).fill(0))
    }
    for(let i=0;i<matrix1.length;i++){
        for(let j=0;j<matrix2[0].length;j++){
            ansArr[i][j]=matrix1[i][j]+matrix2[i][j]
        }
    }
    return ansArr;
}

const ans  = additionOfMatrix(matrix1,matrix2)
for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans.length; j++) {
      process.stdout.write(ans[i][j] + " ");
    }
    console.log();
  }
