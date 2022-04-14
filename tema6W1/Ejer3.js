function lazyMultiply(...n) {
    if (n.length === 2) {
        console.log(n[0]*n[1]);
    } else {
        return function(secondNum){
            console.log(n[0]*secondNum);
        }
    }
}

lazyMultiply(7, 4) // 28
const perTwo = lazyMultiply(2)
perTwo(3) // 6
lazyMultiply(5)(10) // 50