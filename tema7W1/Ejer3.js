const asyncRequest = require(`./asyncRequest`);

function cutriFetch(resource) {
    const promise = new Promise(function (resolve, reject) {
        asyncRequest(resource, (value) => resolve(value));
    });
    return promise;
}

cutriFetch("resource1")
    .then(() => cutriFetch("resource2"))
    .then(() => cutriFetch("resource3"))
    .then(() => console.log("¡Completado!"));