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