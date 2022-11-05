function towerOfHanoi(n, start, helper, destination) {

    // base case
    if(n===1) {
        console.log(`Move 1 from ${start} to ${destination}`);
        return
    }

    towerOfHanoi(n-1,start,destination,helper)
    console.log(`Move ${n} from ${start} to ${destination}`);
    towerOfHanoi(n-1,helper,start,destination)

}

towerOfHanoi(3,'A','B','C')