import App from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';
document.getElementById("root").appendChild(App());

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
<div class="cardsContainer">
<div id="cardP${index}" class="cardP">

<div  class ="face frontCard" >
<img src="${"../pokemonimg/pokebola.png"}" id="pokebola">
</div>


<div id="${index}" class="face backCard">
<img src="${pokemon3[index].image}"> <h3>title="${pokemon3[index].id}"</h3>
</div>
</div>
</div>
`;  
        print.innerHTML = random;
}



//Variables de las tarjetas al momento de hacer click
let countCards= null;
let pokemonId1= null;
let pokemonId2= null;
let cardId1 = null;
let cardId2 = null;

let score = 0;
let flipped = 0;

let flips = document.getElementsById("flips");
let showScore = document.getElementById("score");
const selCards = document.getElementsByClassName("cardsP");

for (const card of selCards) {
card.addEventListener("click", function(){
        countCards++;
        if(countCards == 1) {

                card.classList.toggle("is-flipped");
        pokemonId1 = document.getElementById(card.firstElementChild.id);
        cardId1 = card.firstElementChild.innerText;
        cardId1.disabled = true;
        } else {
        if (countCards == 2){
                card.classList.toggle("is-flipped");
                pokemonId2 = document.getElementById(card.firstElementChild.id);
                cardId2 = card.firstElementChild.innerText;
                pokemonId2.disabled = true;
                flipped++;    
                flips.innerHTML = `Movimientos: ${flipped}`;

                if (cardId1 === cardId2) {
                        countCards = 0;

                        score++;
                        showScore.innerHTML = `Aciertos: ${score}`;
                } else{ {
setTimeout(() => {
pokemonId1.parentNode.classList.remove("is-flipped");
pokemonId2.parentNode.classList.remove("is-flipped");
}, 1000);

pokemonId1.disabled = false;
pokemonId2.disabled = false;
eventFire(pokemonId1, "click");
eventFire(pokemonId2, "click");

countCards = 0;
}
}
}
});
}
