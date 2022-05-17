import { searchCharacter } from "./searchCharacter.js";
import { getCallApi, stringCharacter, stringEpisode } from "./getCallApi.js";

async function getCharactersOfEpisode(episode, charactersNotRepeat) {

    let characters = [];
    episode.characters.forEach((character) => {
        if (!charactersNotRepeat.has(character)) {
            charactersNotRepeat.add(character);
            characters.push(character);
        }
    });
    let requestsCharacters = characters.map(url => getCallApi(url, stringCharacter));
    return await Promise.all(requestsCharacters);
}

async function getCompanions(nameCharacter) {

    // CONSULTA PERSONAJE A LA API
    const character = await searchCharacter(nameCharacter);
    // CONSULTA EPISODIOS
    const urlEpisodes = character.episode;
    const requestsEpisodes = urlEpisodes.map(url => getCallApi(url, stringEpisode));
    const episodes = await Promise.all(requestsEpisodes);

    // GUARDA PERSONAJES

    let charactersNotRepeat = new Set();
    const requestsCharacters = episodes.map(async (episode) =>
        await getCharactersOfEpisode(episode, charactersNotRepeat)
    );
    let resultCharacters = await Promise.all(requestsCharacters);
    resultCharacters = resultCharacters.flat();

    // ORDENA PERSONAJES
    let idAndNameCharacters = [];
    idAndNameCharacters = resultCharacters.map(character => { return { id: character.id, name: character.name }; });
    idAndNameCharacters.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });

    // ELIMINA PERSONAJE ORIGINAL
    let nameCharactersWhithOutOriginal = idAndNameCharacters.filter(CurrentCharacter => CurrentCharacter.name !== character.name);

    // MUESTRA PERSONAJES OBTENIDOS
    console.log(nameCharactersWhithOutOriginal);
    // console.log(idAndNameCharacters);
}

getCompanions("armagheadon");