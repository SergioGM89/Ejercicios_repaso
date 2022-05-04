const asyncRequest = require(`./asyncRequest`);

function orderResources() {

    if (finalizedResources[0] !== undefined) {
        printResource(0);
        if (finalizedResources[1] !== undefined) {
            printResource(1);
            if (finalizedResources[2] !== undefined) {
                printResource(2);
            }
        }
    }
}

function printResource(n) {
    if (!isPrinted(finalizedResources[n])) {
        console.log(finalizedResources[n]);
        finalizedResources[n] = "printed";
    }
}

function isPrinted(resource) {
    return resource === "printed";
}

let resources = ["resource1", "resource2", "resource3"];
let finalizedResources = [];
for (let i = 0; i < resources.length; i++) {
    asyncRequest(resources[i], (resource) => {
        finalizedResources[i] = resource;
        orderResources();
    });
}