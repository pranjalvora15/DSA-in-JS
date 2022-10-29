const number=123456

function countDigit(num){
    let digit=0;
    while(num>0){
        num=parseInt(num/10)
        digit++;
    }
    return digit
}

console.log(countDigit(number));