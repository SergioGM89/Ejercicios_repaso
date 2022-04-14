function mergeValues(arrayOfIntegers) {
    const MINIMUM = 15;
    let copyOfArrayOfIntegers;
    [...copyOfArrayOfIntegers] = arrayOfIntegers;
    let element;
    let sum = 0;
    while (element = copyOfArrayOfIntegers.pop()) {
        sum += element
    }
    sum = Math.max(sum, MINIMUM)
    copyOfArrayOfIntegers.push(sum);

    return copyOfArrayOfIntegers;
}
console.log(mergeValues([10, 20, 30, 40])) // [100]
console.log(mergeValues([1, 2, 3, 4])) // [15] (MINIMUM)
