const asyncRequest = require(`./asyncRequest`);

// Podrías haber usado el método includes():
// function contain3(num) { return num.toString().includes(`3`); }
function contain3(num) {
    let numString = num.toString();
    for (let i = 0; i < numString.length; i++) {
        if (numString.charAt(i) === "3") {
            return true;
        }
    }
    return false;
}

/* if(expresión) return true else return false es una mala práctica, puesto que expresión es booleano y en ese
   caso se puede devolver directamente la expresión (o !!expresión si quieres que sea booleano y no truthy o falsy)
   Estaría mejor:
   function divisible3(num) { return num % 3 === 0; }
*/
function divisible3(num) {
    if (num % 3 === 0) {
        return true;
    }
    return false;
}

/* Está mal planteado. Revisa cómo devolver promesas y lo vemos en la tutoría
   La función devuelve undefined y no una promesa. Tienes que devolver una promesa
   que se resuelva en el timeout, no devolver algo en el timeout (ya que el código
   llamante habrá finalizado)
*/
function fizz(num) {
    let randomDelay = Math.round(Math.random() * 10_000) + 100;
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

    // Esto no imprimiría los números en orden sino conforme se vayan resolviendo
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
