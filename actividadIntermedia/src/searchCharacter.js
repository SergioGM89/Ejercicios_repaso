import { getCallApi, stringCharacter } from "./getCallApi.js";

async function searchCharacter(name) {
    let url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    let characters = await getCallApi(url, stringCharacter);
    let firstCharacter = characters.results[0];
    // console.log(characters.results[0]);
    return firstCharacter;
}

// searchCharacter("morty");
export { searchCharacter };