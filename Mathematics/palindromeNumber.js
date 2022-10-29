const number = 123321

function isPalindrome(num){
    let reminder=0;
    let reverseNumber=0;
    let temp=num
    while(temp>0){
        reminder = temp % 10
        reverseNumber = reverseNumber * 10 + reminder
        temp = parseInt(temp/10)
    }
    return reverseNumber === num
}

console.log(isPalindrome(number));