//import App from "./components/App.js";
import pokemon from "./data/pokemon/pokemon.js";

const pokemon1 = pokemon.items; //console.log(pokemon1); //es la primera copia de mi arreglo
const pokemon2 = pokemon.items; //console.log(pokemon2); //es la segunda copia de mi arreglo
const pokemon3 = pokemon1.concat(pokemon2); //console.log(pokemon3); //pokemon3 es mi arreglo "duplicado" y unido pero no mezclado

//Algoritmo Fisher-Yates: para mezclar los elementos del arreglo
function mixCards(pokemonX) {
  for (let i = pokemonX.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //console.log("i", i); //console.log("j", j);
    [pokemonX[i], pokemonX[j]] = [pokemonX[j], pokemonX[i]];
  }
  //console.log(pokemonX);
}
mixCards(pokemon3);

//Pasemos las imágenes al DOM (sólo las imágenes)
export let random = "";
for (let index = 0; index < 18; index++) {
  const print = document.getElementById("pokeCards");
  random += `
<div class="cardP">
        <div id="cardsContainer${index}" class="cardsContainer">
        <div class ="face frontCard">
                <img src="${"../pokemonimg/pokebola.png"}" id="pokebola">
        </div>

        <div id="${index}" class="face backCard">
              <img src="${pokemon3[index].image}"> <h3> ${pokemon3[index].id} </h3> 
          </div>
</div>
</div>
`;
  print.innerHTML = random;
}
//Variables de mis tarjetas
let countCards = 0; //cuenta las tarjetas
let pokemonId1 = null; //tarjeta1
let pokemonId2 = null; //tarjeta2
let cardId1 = null;
let cardId2 = null;

let flipped = 0; 
let flips = document.getElementById("flips");
let score = 0;
let showScore = document.getElementById("score");
let tempo = false;

let timer = 70;
let countdownTime = null;
let initialTime= 70;
let time = document.getElementById("time");

const selCards = document.getElementsByClassName("cardsContainer");

export function countingTime(){
  countdownTime= setInterval(()=>{
    timer--;
    time.innerHTML = `Tiempo: ${timer} segundos`
  if(timer ==0){
    clearInterval(countdownTime);
    blockCards()
  }
  },1000)
}

export function blockCards(){
  for(let i = 0; i <= 18; i++){
    let oneBlockedCard= document.getElementById(`cardsContainer${i}`);
    oneBlockedCard.className = "cardsContainer is-flipped";
  }
}

for (const card of selCards) {
  card.addEventListener('click',function (){

    if(tempo == false){
      countingTime();
    tempo=true;
    }

  countCards++;
    if (countCards ==1){ 
    card.classList.toggle("is-flipped");
    pokemonId1 = card; 
    cardId1= card.innerText;
    
    } else {
  if (countCards ==2){
    card.classList.toggle("is-flipped");
    pokemonId2 = card;
    cardId2= card.innerText;
    flipped++;
  flips.innerHTML=  `Movimientos: ${flipped} `;

    if (cardId1===cardId2){
    countCards = 0; 
    score++;
    showScore.innerHTML=  `Aciertos: ${score} `;
    
    if (score==9) {
      clearInterval(initialTime)
      showScore.innerHTML= `Aciertos: ${score}`;
      time.innerHTML = `¡Muy bien! Lo hiciste en: ${initialTime-timer} segundos✨`
      flips.innerHTML=  `Movimientos: ${flipped} `;

    }
    
  } else {
    
    setTimeout(() => { pokemonId1.classList.toggle("is-flipped"), 
        pokemonId2.classList.toggle("is-flipped");}, 1300);
        countCards = 0;   
      }
    }
  } 
}
)}

/*<div id="${index}" class="face backCard">
                        <img id="pokemon3${index}" src="${
    pokemon3[index].image
  }" alt="${pokemon3[index].id}" />
        </div>*/















