import fetch from "node-fetch";

// async function searchCharacter(name) {
//     try {
//         const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
//         if (response.status === 200) {
//             console.log("adios");
//             const data = await response.json();
//         } else {
//             console.log("Hola");
//             throw response.status;
//         }
//         console.log(await data.results[0]);

//     } catch (error) {
//         console.log(`Error HTTP: ${error}`);
//     }
// }

function searchCharacter(name) {
    return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else if(response.status === 404){
                throw "Personaje no encontrado.";
            }else{
                throw `Error: ${response.status}`;
            }
        })
        .then((data) => {
            console.log(data.results[0]);
            return data.results[0];
        })
        .catch((error) => {
            console.log(error);
        });
}

// searchCharacter("morty");
export { searchCharacter };