// // const fetch = require("node-fetch");
// let L = document.getElementsByTagName("div")[0];
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

// fetch(`http://api.open-notify.org/iss-now.json`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         let L = document.getElementsByTagName("div")[0];
//         let map = L.map('map').setView([51.505, -0.09], 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         L.marker([51.5, -0.09]).addTo(map)
//             .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//             .openPopup();
//         // let movesPokemon = [];
//         // for (let i = 0; data.moves[i]; i++) {
//         //     movesPokemon.push(data.moves[i].move.name);
//         // }
//         // movesPokemon.sort();
//         // console.log(movesPokemon);
//     });