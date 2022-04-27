
/*
Está bien planteado pero lee las especificaciones. La función no debe
imprimir el id, sino devolverlo. Tendría que usarse así:

const LEN3ID = createIDGenerator(3);
console.log(LEN3ID());
console.log(LEN3ID());
...

Ten cuidado con estas cosas en el examen
*/
function createIDGenerator(large) {
    let id = 0;

    return function() {
        id++;
        let idString = id.toString();
        let largeString = idString.padStart(large, "0");
        console.log(largeString);
    }
}

const LEN3ID = createIDGenerator(3);
LEN3ID();
LEN3ID();
LEN3ID();

const LEN5ID = createIDGenerator(5);
LEN5ID();
