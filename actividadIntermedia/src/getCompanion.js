import fetch from "node-fetch";
import { searchCharacter } from "./searchCharacter.js";

async function getCompanions(nameCharacter) {

    // CONSULTA PERSONAJE A LA API
    const character = await searchCharacter(nameCharacter);
    console.log(character.episode[0]);
    // CONSULTA EPISODIOS
    const urlEpisodes = character.episode;

    const requestsEpisodes = urlEpisodes.map(url => fetch(url));
    const episodes = await Promise.all(requestsEpisodes);
    const dataEpisodes = episodes.map(episode => episode.json());

    console.log(await dataEpisodes[0]);

    // GUARDA PERSONAJES

    let charactersNotRepeat = new Set();
    const requestsCharacters = dataEpisodes.map(async (episode) =>
        await episode.characters.map(url => {
            if (!charactersNotRepeat.has(url)) {
                fetch(url);
                charactersNotRepeat.add(url);
            }
        }));
    const characters = await Promise.all(requestsCharacters);
    const dataCharacter = characters.map(character => character.json());

    console.log(dataCharacter);

    // ORDENA PERSONAJES
    let nameCharacters = dataCharacter.map(character => character.name);
    nameCharacters.sort();

    // ELIMINA PERSONAJE ORIGINAL
    let nameCharactersWhithOutOriginal = nameCharacters.filter(nameCharacter => nameCharacter !== character.name);

    // MUESTRA PERSONAJES OBTENIDOS
    
    console.log(nameCharactersWhithOutOriginal);

}

getCompanions("morty");