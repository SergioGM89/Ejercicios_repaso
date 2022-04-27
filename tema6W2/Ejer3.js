const fetch = require("node-fetch");

function toUpper(name){
    let first = name.charAt(0).toUpperCase();
    let rest = name.slice(1);
    return first + rest;
}

// No hacía falta que usaras el fetch, podrías haber puesto la cadena de evolución en un literal
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

    /*
    No está mal, pero estaría mejor si en vez de construir la cadena directamente
    guardases todo en un array y luego construyeses la cadena, por ejemplo con join.
    Siempre es mejor separar los datos de la presentación, ya que la presentación es algo
    que suele cambiar más a menudo y no interesa tenerlo mezclado.
    */
    while(dataChainEvolves){
        stringPokemons += ` - ${toUpper(dataChainEvolves.species.name)}`;
        dataChainEvolves = dataChainEvolves.evolves_to[0];
    }
    console.log(stringPokemons);
})
.catch((error) => {
    console.log(error);
});
