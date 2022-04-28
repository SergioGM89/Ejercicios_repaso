const asyncRequest = require(`./asyncRequest`);

function orderResources(finalizedResources) {
    if (!isPrinted(finalizedResources[0])) {
        if (finalizedResources[0] !== undefined) {
            printResource(finalizedResources[0]);
            finalizedResources[0] = "printed";
        }else{
            return;
        }
    }else if(!isPrinted(finalizedResources[1])){
        if (finalizedResources[1] !== undefined) {
            printResource(finalizedResources[1]);
            finalizedResources[1] = "printed";
        }else{
            return;
        }
    }else{
        if (finalizedResources[2] !== undefined) {
            printResource(finalizedResources[2]);
            finalizedResources[2] = "printed";
        }else{
            return;
        }
    }
}

function printResource(resource) {
    console.log(resource);
}

function isPrinted(resource) {
    return resource === "printed";
}

let resources = ["resource1", "resource2", "resource3"];
let finalizedResources = [];
for (let i = 0; i < resources.length; i++) {
    asyncRequest(resources[i], (resource) => {
        finalizedResources[i] = resource;
        orderResources(finalizedResources);
    });
}


//////////////////////Cris//////////////////////////////

// const { asyncRequest, MIS_RECURSOS } = require("./asyncRequest");
// let arrayRespuestas = [];
// function isUndefined(recurso) {
//   if (arrayRespuestas[recurso] === undefined) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function mostrarRecurso(recurso) {
//   if (arrayRespuestas[recurso] !== "leido")
//     console.log(arrayRespuestas[recurso]);
//   arrayRespuestas[recurso] = "leido";
// }
// function ordenaResultadosCallbackQue(recurso, respuesta) {
//   arrayRespuestas[recurso] = respuesta;

//   if (isUndefined("recurso1")) {
//     return;

//   } else {
//     mostrarRecurso("recurso1");

//     if (!isUndefined("recurso2")) {
//       mostrarRecurso("recurso2");

//       if (!isUndefined("recurso3")) {
//         mostrarRecurso("recurso3");
//       }
//     }
//   }
// }

// for (let recurso in MIS_RECURSOS) {
//   asyncRequest(recurso, (respuestaCallback) =>
//     ordenaResultadosCallbackQue(recurso, respuestaCallback)
//   );
// }

//////////////////////Jaime///////////////////////////////

// const asyncRequest = require('./asyncRequest');

// function print(resourcesFound) {
//     if (includeResource(resourcesFound, 'resource1')) {
//         printResource(resourcesFound['resource1']);
//         resourcesFound['resource1'] = undefined;

//         if (includeResource(resourcesFound, 'resource2')) {
//             printResource(resourcesFound['resource2']);
//             resourcesFound['resource2'] = undefined;

//             if (includeResource(resourcesFound, 'resource3')) {
//                 printResource(resourcesFound['resource3']);
//                 console.log('¡Completado!');
//             }
//         }
//     }
// }

// function includeResource(resourcesFound, resourceSearch) {
//     return Object.keys(resourcesFound).includes(resourceSearch);
// }

// function printResource(data) {
//     if (data) console.log(data)
// }

// function searchResources(resources) {
//     let resourcesFound = {};

//     resources.forEach(resource => {
//         asyncRequest(resource, (data) => {
//             resourcesFound[resource] = data;
//             print(resourcesFound);
//         })
//     });
// }

// let resources = ['resource1', 'resource2', 'resource3'];
// searchResources(resources);