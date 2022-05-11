import fetch from "node-fetch";
import { searchCharacter } from "./searchCharacter.js";

async function getCharactersOfEpisode(episode, charactersNotRepeat) {

    await episode.characters.forEach((character) => {
        console.log(!charactersNotRepeat.has(character));
        // if (!charactersNotRepeat.has( character)) {
            charactersNotRepeat.add(character);
        // }
    });

    let characters = Array.from(charactersNotRepeat);
    return await Promise.all(
        characters.map(async (url) => (await fetch(url)).json())
    );
}

async function getCompanions(nameCharacter) {

    // CONSULTA PERSONAJE A LA API
    const character = await searchCharacter(nameCharacter);
    console.log(character.episode[0]);
    // CONSULTA EPISODIOS
    const urlEpisodes = character.episode;

    const requestsEpisodes = urlEpisodes.map(async (url) => (await fetch(url)).json());
    const episodes = await Promise.all(requestsEpisodes);
    console.log(episodes);

    // GUARDA PERSONAJES

    let charactersNotRepeat = new Set();
    console.log(episodes[0].id);
    const requestsCharacters = episodes.map(async (episode) => {
        let res = await getCharactersOfEpisode(episode, charactersNotRepeat);
        return res;
        }
    );
    console.log(requestsCharacters);

    // const characters = await Promise.all(requestsCharacters);
    // const dataCharacter = characters.map(character => character.json());

    // console.log(dataCharacter);

    // ORDENA PERSONAJES
    let nameCharacters = [];
    requestsCharacters.forEach( async (episode) => {
        nameCharacters = await episode.map(character => character.name);
        nameCharacters.sort();
    });

    // ELIMINA PERSONAJE ORIGINAL
    let nameCharactersWhithOutOriginal = nameCharacters.filter(nameCharacter => nameCharacter !== character.name);

    // MUESTRA PERSONAJES OBTENIDOS
    console.log(nameCharactersWhithOutOriginal);
    // console.log(nameCharactersWhithOutOriginal);

}

getCompanions("morty");