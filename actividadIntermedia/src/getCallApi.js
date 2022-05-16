import fetch from "node-fetch";

const stringCharacter = `Personaje`;
const stringEpisode = `Capitulo`;

async function getCallApi(url, objectOfRequest) {

    return fetch(url)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else if(response.status === 404){
                throw `${objectOfRequest} no encontrado.`;
            }else{
                throw `Error: ${response.status}`;
            }
        })
        .catch((error) => {
            console.log(error);
        });

}

export { getCallApi, stringCharacter, stringEpisode };