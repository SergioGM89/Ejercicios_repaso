const fetch = require("node-fetch");

function toUpper(name){
    let first = name.charAt(0).toUpperCase();
    let rest = name.slice(1);
    return first + rest;
}

fetch(`https://pokeapi.co/api/v2/evolution-chain/1`)
.then((response) => {
    if(response.status < 200 && response.status > 300){
        Promise.reject(`Error: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    let stringPokemons;
    let dataChainEvolves = data.chain.evolves_to[0];
    stringPokemons = toUpper(data.chain.species.name);

    while(dataChainEvolves){
        stringPokemons += ` - ${toUpper(dataChainEvolves.species.name)}`;
        dataChainEvolves = dataChainEvolves.evolves_to[0];
    }
    console.log(stringPokemons);
})
.catch((error) => {
    console.log(error);
});