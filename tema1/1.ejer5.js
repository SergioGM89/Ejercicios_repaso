function sumNumbers(array) {
    array.forEach(num => {
        switch (num) {
            case 1:
                uno.push(1);
                break;

            case 2:
                dos.push(1);
                break;

            case 3:
                tres.push(1);
                break;

            case 4:
                cuatro.push(1);
                break;

            case 5:
                cinco.push(1);
                break;

            case 6:
                seis.push(1);
                break;

            case 7:
                siete.push(1);
                break;

            case 8:
                ocho.push(1);
                break;

            case 9:
                nueve.push(1);
                break;

            case 10:
                diez.push(1);
                break;
        }
    });
}

function cont(numero){
    return array.filter(num => num === numero);
}

function returnModal(){
    
}

let array = [];

for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 10));
}

let unos = cont(1);
let doses = cont(2);
let treses = cont(3);
let cuatros = cont(4);
let cincos = cont(5);
let seises = cont(6);
let sietes = cont(7);
let ochos = cont(8);
let nueves = cont(9);
let dieces = cont(10);


let uno = [], dos= [], tres= [], cuatro= [], cinco= [], seis= [], siete= [], ocho= [], nueve= [], diez= [];
sumNumbers(array);

let modalNumber = returnModal(uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez);

console.log(modalNumber);