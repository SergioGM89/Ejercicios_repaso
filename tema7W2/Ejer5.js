const fetch = require("node-fetch");

let pokemon = "bulbasaur";
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let movesPokemon = [];
        for (let i = 0; data.moves[i]; i++) {
            movesPokemon.push(data.moves[i].move.name);
        }
        movesPokemon.sort();
        console.log(movesPokemon);
    });