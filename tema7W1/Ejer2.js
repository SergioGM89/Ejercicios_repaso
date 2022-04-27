const asyncRequest = require(`./asyncRequest`);

// asyncRequest("resource1", () => {});
// asyncRequest("resource2", () => {});
// asyncRequest("resource3", () => {
//     console.log("¡Completado!");
// });

Promise.all([
    asyncRequest("resource1", () => {}),
    asyncRequest("resource2", () => {}),
    asyncRequest("resource3", () => {})
])
.then(() => console.log("¡Completado!"));


/*
asyncRequest NO devuelve una promesa, con lo que no puedes hacer un Promise.all
Se ejecutan las tres acciones en paralelo pero no esperas a que terminen para continuar. Si ves los
logs, "!Completado!" se muestra antes de que se hayan mostrado los tres mensajes.
*/
