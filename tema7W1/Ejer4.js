// const asyncRequest = require(`./asyncRequest`);

// function contain3(num) {
//     let numString = num.toString();
//     for (let i = 0; i < numString.length; i++) {
//         if (numString.charAt(i) === "3") {
//             return true;
//         }
//     }
//     return false;
// }

// function divisible3(num) {
//     if (num % 3 === 0) {
//         return true;
//     }
//     return false;
// }

// function fizz(num) {
//     let randomDelay = Math.round(Math.random() * 1000) + 100;
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             if (contain3(num) || divisible3(num)) {
//                 return resolve(true);
//             } else {
//                 return resolve(false);
//             }
//         }, randomDelay);
//     });
// }


// let finalString = "";
// for (let num = 1; num <= 300; num++) {
    
//     fizz(num)
//         .then((isFizz) => {
//             if (isFizz) {
//                 finalString += "fizz, ";
//             } else {
//                 finalString += `${num.toString()}, `;
//             }
//             // console.log(finalString);
//             // return finalString;
//         });

// }
// finalString = finalString.substring(0, finalString.length - 2);
// let datos = new Promise((resolve, reject) => {
//     resolve(finalString);
// })
// datos.then(()=>console.log(datos));

//FUNCIONES ORDENACION RESPUESTAS
function isUndefined(indice) {
    if (arrayRespuestas[indice] === undefined) {
      return true;
    } else {
      return false;
    }
  }
  
  function mostrarRecurso(num) {
    if (arrayRespuestas[num] !== "leido") {
      console.log(arrayRespuestas[num]);
      arrayRespuestas[num] = "leido";
    }
  }
  
  function ordenaResultadosCallbackQue(num, respuesta) {
    arrayRespuestas[num] = respuesta;
    for (let i = 1; i <= arrayRespuestas.length; i++) {
      if (arrayRespuestas[i] === undefined) {
        return;
      } else if (arrayRespuestas[i] !== "leido") {   
        mostrarRecurso(i);
      }
    }
  }
  
  //FUNCIONES COMPROBACION CONDICIONES
  let contieneNumeroTres = (num) => num.toString().includes("3");
  let esDivisiblePorTres = (num) => num % 3 == 0;
  
  
  //FUNCION ASÍNCRONA LLAMA A COMPROBACIONES
  function fizz(num, callback) {
    const MIN_DELAY = 100;
    const MAX_DELAY = 1000;
    let randomDelay = Math.round(Math.random() * MAX_DELAY) + MIN_DELAY;
    console.log(
      "***Ejecutando petición de comprobación de condiciones para:" + num + "***"
    );
  
    //Llama a la funcion callback que comprueba las condiciones al cabo de un tiempo
    setTimeout(() => {
      callback();
    }, randomDelay);
  }
  
  //FUNCION CREACION PROMESA
  function getResource(num) {
    return new Promise((resolve, reject) => {
      try {
        //fizz(numero, (comprobarCondiciones) => resolve(comprobarCondiciones));
        fizz(num, () => {
          if (contieneNumeroTres(num) || esDivisiblePorTres(num)) {
            return resolve("fizz");
          } else {
            return resolve(num);
          }
        });
      } catch (error) {
        reject("Ha fallado");
      }
    });
  }
  
  //MAIN
  let arrayRespuestas = []; //Almacena respuestas leidas
  for (let numero = 1; numero <= 30; numero++) {
    getResource(numero).then((dato) => {
      ordenaResultadosCallbackQue(numero, dato);
    });
  }