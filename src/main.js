import App from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';

const pokemon1 = pokemon.items;
        //console.log(pokemon1); //es la primera copia de mi arreglo
const pokemon2 = pokemon.items;
        //console.log(pokemon2); //es la segunda copia de mi arreglo
let pokemon3 = pokemon1.concat(pokemon2); 
        //console.log(pokemon3); //pokemon3 es mi arreglo "duplicado" y unido pero no mezclado

//Algoritmo Fisher-Yates: para mezclar los elementos del arreglo
function mixCards (pokemonX){
for (let i = pokemonX.length-1; i>0; i--){
 let j = Math.floor(Math.random()*(i + 1)); //console.log("i", i); //console.log("j", j);
[pokemonX[i], pokemonX[j]] = [pokemonX[j], pokemonX[i]];
}
//console.log(pokemonX);
}
mixCards(pokemon3);

//Pasemos las imágenes al DOM (sólo las imágenes)
let random = "";
for (let index=0; index < 18; index++){
const print = document.getElementById("pokeCards");
random += `
<section class="container">
    <div class="face frontCard" >
      <img src="${"../pokemonimg/pokebola.png"}" alt="pokebola" id="pokebola">
    </div>
    <div class="face backCard">
      <img src="${pokemon3[index].image}" widht="120" height="120px" />
      <h3>title="${pokemon3[index].id}"</h3>
    </div>
  </section>
`;  

        print.innerHTML = random;
}










//document.getElementById('root').appendChild(App());

