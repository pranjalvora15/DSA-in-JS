function frequencyOfElement(arr){
    let n=arr.length
    let freq=1
    let i=1
    while(i<n){
        while(i<n && arr[i-1]===arr[i]){
            i++;
            freq++;
        }
        process.stdout.write(arr[i-1]+', '+freq)
        console.log();
        i++;
        freq=1
    }
    if(n===1 || arr[n-2] !== arr[n-1]){
        process.stdout.write(arr[n-1]+', '+1)
    }
}

frequencyOfElement([10,10,10,30,30,40])
console.log();
frequencyOfElement([40,50,50,50])

// T.C = Theta(n), S.C = O(1)