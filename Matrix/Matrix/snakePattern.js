const matrix = [[1,2,3,4],
                [5,6,7,8],
                [9,10,11,12],
                [13,14,15,16]]

function snakePattern(matrix){
    const row=matrix.length
    for(let i=0;i<row;i++){
        let col = matrix[i].length
        if(i%2===0){
            for(let j=0;j<col;j++){
                console.log(matrix[i][j])
            }
        }else{
            for(let j=col-1;j>=0;j--){
                console.log(matrix[i][j]);
            }
        }
    }
}

snakePattern(matrix)
