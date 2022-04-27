function map(array, funcion) {
    let newArray = [];
    // Trampa, has usado bucles.
    // Prueba con reduce
    for (let i = 0; i < array.length; i++) {
        newArray[i] = funcion(array[i]);
    }
    return newArray;
}
console.log(map([1, 2, 3], x => x * 2)); // [2,4,6]
