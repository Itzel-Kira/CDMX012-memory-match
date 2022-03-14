import App from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';

const pokemon1 = pokemon.items;
const pokemon2 = pokemon.items; 
console.log(pokemon1);

const pokemon3 = pokemon1.concat(pokemon2);
console.log(pokemon3);

document.getElementById('root').appendChild(App());

