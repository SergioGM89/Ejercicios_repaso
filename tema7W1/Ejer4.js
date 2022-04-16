const asyncRequest = require(`./asyncRequest`);

function contain3(num) {
    let numString = num.toString();
    for (let i = 0; i < numString.length; i++) {
        if (numString.charAt(i) === "3") {
            return true;
        }
    }
    return false;
}

function divisible3(num) {
    if (num % 3 === 0) {
        return true;
    }
    return false;
}

function fizz(num) {
    let randomDelay = Math.round(Math.random() * 1000) + 100;
    setTimeout(() => {
        if (contain3(num) || divisible3(num)) {
            return new Promise((resolve, reject) => {
                resolve(true);
            });
        }
        return new Promise((resolve, reject) => {
            resolve(false);
        })
    }, randomDelay);


}


let finalString = "";
for (let num = 1; num <= 300; num++) {

    fizz(num)
        .then((isFizz) => {
            if (isFizz) {
                finalString += "fizz, ";
            } else {
                finalString += `${num.toString()}, `;
            }
            return finalString;
        });

}
finalString = finalString.substring(0, finalString.length - 2);
console.log(finalString);
