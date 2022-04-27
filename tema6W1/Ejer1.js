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
/*
Buen intento del spread operator, pero fíjate que sólo te hace falta
la copia al final, no al principio.

Podrías haber hecho, por ejemplo:

function mergeValues(arrayOfIntegers) {
    const MINIMUM = 15;

    let element;
    let sum = 0;
    while (element = arrayOfIntegers.pop()) {
        sum += element
    }
    sum = Math.max(sum, MINIMUM)

    return [...arrayOfIntegers, sum];
}

Tienes que tocar mucho menos código y queda más claro
*/

console.log(mergeValues([10, 20, 30, 40])) // [100]
console.log(mergeValues([1, 2, 3, 4])) // [15] (MINIMUM)
