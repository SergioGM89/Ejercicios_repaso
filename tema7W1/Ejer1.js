const asyncRequest = require(`./asyncRequest`);

asyncRequest("resource1", () => {
    asyncRequest("resource2", () => {
        asyncRequest("resource3", () => {
            console.log("¡Completado!");
        })
    })
});