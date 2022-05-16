import fetch from "node-fetch";
import { searchCharacter } from "./searchCharacter.js";
import { getCallApi, stringCharacter, stringEpisode } from "./getCallApi.js";

async function getCharactersOfEpisode(episode, charactersNotRepeat) {

    let characters = [];
    episode.characters.forEach((character) => {
        if(!charactersNotRepeat.has(character)){
        charactersNotRepeat.add(character);
        characters.push(character);
        }
    });
    let requestsCharacters = characters.map(url => getCallApi(url, stringCharacter));
    console.log("Hola");
    return await Promise.all(requestsCharacters);
    console.log("Adiós");
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
    // console.log(episodes[0].id);
    const requestsCharacters = episodes.map(async (episode) => 
        getCharactersOfEpisode(episode, charactersNotRepeat)
    );
    let formatRequestsCharacters = requestsCharacters.flat();
    console.log(formatRequestsCharacters);

    // ORDENA PERSONAJES
    let idAndNameCharacters = [];
    requestsCharacters.forEach(async (episode) => {
        idAndNameCharacters = await episode.map(character => {return {id: character.id, name: character.name};});
        idAndNameCharacters.sort((a, b) => b.name - a.name);
    });

    // ELIMINA PERSONAJE ORIGINAL
    let nameCharactersWhithOutOriginal = idAndNameCharacters.filter(CurrentCharacter => CurrentCharacter.name !== character.name);

    // MUESTRA PERSONAJES OBTENIDOS
    console.log(nameCharactersWhithOutOriginal);
}



//////////////////SEGUNDO INTENTO///////////////////////////////////

// async function getCharactersOfEpisode(urlEpisodes){         
//     let charactersAtEpisode = await getCallApi(urlEpisodes, stringEpisode);
//     return charactersAtEpisode;
// }

// async function getCompanions(nameCharacter) {

//         // CONSULTA PERSONAJE A LA API
//         const character = await searchCharacter(nameCharacter);
//         // console.log(character.episode);
//         // CONSULTA EPISODIOS
//         const urlEpisodes = character.episode;

//         //CONSULTA EPISODIO
//         // getCharactersOfEpisode(urlEpisodes)
//         // let charactersAtEpisode = await getCallApi(urlEpisodes, stringEpisode);

//         let resultsFetchEpisodes = urlEpisodes.map(urlEpisode => getCallApi(urlEpisode, stringEpisode));

//         // const requestsEpisodes = urlEpisodes.map(async (url) => (await fetch(url)).json());
//         const charac = await Promise.all(requestsEpisodes);
//         console.log(episodes);
    
//         // GUARDA PERSONAJES
    
//         let charactersNotRepeat = new Set();
//         console.log(episodes[0].id);
//         const requestsCharacters = episodes.map(async (episode) => {
//             let res = await getCharactersOfEpisode(episode, charactersNotRepeat);
//             return res;
//         }
//         );
//         console.log(requestsCharacters);
    
//         // const characters = await Promise.all(requestsCharacters);
//         // const dataCharacter = characters.map(character => character.json());
    
//         // console.log(dataCharacter);
    
//         // ORDENA PERSONAJES
//         let nameCharacters = [];
//         requestsCharacters.forEach(async (episode) => {
//             nameCharacters = await episode.map(character => character.name);
//             nameCharacters.sort();
//         });
    
//         // ELIMINA PERSONAJE ORIGINAL
//         let nameCharactersWhithOutOriginal = nameCharacters.filter(nameCharacter => nameCharacter !== character.name);
    
//         // MUESTRA PERSONAJES OBTENIDOS
//         console.log(nameCharactersWhithOutOriginal);
//         // console.log(nameCharactersWhithOutOriginal);
    
//     }

///////////////PRIMER INTENTO////////////////////////

// async function getCharactersOfEpisode(episode, charactersNotRepeat) {

//     let x = await episode.characters.forEach((character) => {
//         console.log(!charactersNotRepeat.has(character));
//         charactersNotRepeat.add(character);
//     });

//     let characters = Array.from(charactersNotRepeat);
//     return await Promise.all(
//         characters.map(async (url) => (await fetch(url)).json())
//     );
// }

// async function getCompanions(nameCharacter) {

//     // CONSULTA PERSONAJE A LA API
//     const character = await searchCharacter(nameCharacter);
//     console.log(character.episode[0]);
//     // CONSULTA EPISODIOS
//     const urlEpisodes = character.episode;

//     const requestsEpisodes = urlEpisodes.map(async (url) => (await fetch(url)).json());
//     const episodes = await Promise.all(requestsEpisodes);
//     console.log(episodes);

//     // GUARDA PERSONAJES

//     let charactersNotRepeat = new Set();
//     console.log(episodes[0].id);
//     const requestsCharacters = episodes.map(async (episode) => {
//         let res = await getCharactersOfEpisode(episode, charactersNotRepeat);
//         return res;
//     }
//     );
//     console.log(requestsCharacters);

//     // const characters = await Promise.all(requestsCharacters);
//     // const dataCharacter = characters.map(character => character.json());

//     // console.log(dataCharacter);

//     // ORDENA PERSONAJES
//     let nameCharacters = [];
//     requestsCharacters.forEach(async (episode) => {
//         nameCharacters = await episode.map(character => character.name);
//         nameCharacters.sort();
//     });

//     // ELIMINA PERSONAJE ORIGINAL
//     let nameCharactersWhithOutOriginal = nameCharacters.filter(nameCharacter => nameCharacter !== character.name);

//     // MUESTRA PERSONAJES OBTENIDOS
//     console.log(nameCharactersWhithOutOriginal);
//     // console.log(nameCharactersWhithOutOriginal);

// }

getCompanions("morty");