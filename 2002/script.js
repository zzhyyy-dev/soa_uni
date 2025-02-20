// // script.js
// fetch('http://localhost:3000/pokemons')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Erro ao carregar os dados do servidor.');
//         }
//         return response.json();
//     })
//     .then(pokemons => {
//         console.log(pokemons);
//         // Aqui você pode manipular os dados como quiser
//         pokemons.forEach(pokemon => {
//             console.log(pokemon.name);
//         });
//     })
//     .catch(error => console.error(error));

const db = require('./db.json')
console.dir(db, { depth: null })