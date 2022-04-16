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