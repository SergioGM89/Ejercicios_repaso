import fetch from "node-fetch";

function searchCharacter(name) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw response.status;
            }
        })
        .then((data) => {
            console.log(data.results[0]);
        })
        .catch((error) => {
            console.log(`Error HTTP: ${error}`);
        });
}

searchCharacter("morty");
export { searchCharacter };