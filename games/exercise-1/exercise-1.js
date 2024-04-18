// ##Memory game
// Dado el html `exercise-1.html` y el css` exercise-1.css`, crea un archivo de javascript (recuerda que el
// javascript que
// proporcionamos nosotros es el que contiene la solución propuesta) para crear un juego de memoria con
// los datos proporcionados por el siguiente array:


let cardArrayOrderer = [
  {
    id: 1,
    name: "earth",
    img: "../public/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "../public/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "../public/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "../public/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "../public/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "../public/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "../public/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "../public/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "../public/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "../public/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "../public/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "../public/exercise-1/uranus.svg",
  },
];


// Este juego es el típico juego de memoria por pareja en el que tendremos que **seleccionar dos tarjetas y si ambas tarjetas
// ocultan la misma imagen, la jugada será correcta** y, si por el contrario **las tarjetas son diferentes entre sí, sus
// imágenes se volverán a ocultar**.

// ##Pasos a seguir

// 1.  Pintar un tablero con las doce imágenes del array y el `src` apuntando al svg de `public/exercise/universe.svg`.
//     Ten en cuenta que como es un juego de parejas, las imágenes y nombres están repetidas en el array.
// 2.  Añadir a cada una de las imágenes un evento click para comprobar si la jugada realizada por el usuario es correcta.
//     Para ello, tendremos que guardar cada dos click en tarjetas que haga el usuario y comparar uno con otro siguiendo
//     las siguientes condiciones:
//     1. Si el usuario hace click en la misma tarjeta dos veces, la jugada no es valida.
//     2. Si el usuario hace click en una tarjeta previamente validada, la jugada no es valida.
//     3. Si el usuario hace click en dos tarjetas con el nombre diferente, la jugada no es valida.
//     4. Si ninguna de estas condiciones se cumple y, el usuario hace click en dos tarjetas con diferentes nombres. la
//        jugada será validada y tendremos que almacenar las tarjetas para posteriores comprobaciones. Además, el `src ` de la imagen debería de cambiar a `public/exercise-1/tick.svg`.
// 3.  Por cada una de las jugadas deberemos validar el score y sumar 1 por cada jugada validada correctamente al span
//     de `score`. Si el
//     usuario ha resuelto el juego completo, muestralé un mensaje de felicitaciones.
// 4.  Por último, para medir la calidad del juego, podríamos crear un contador de intentos e introducir el numero de
//     intentos que el usuario ha llevado a cabo en el span de `attempts`. Realmente este punto es bastante fácil, suma
//     simplemente uno por cada vez que hagas una comprobación de jugada.

// Si has cumplido todas las condiciones...Enhorabuena! tienes un juego de memoría bastante resultón! Además si te
// interesa subir la dificultad no tienes más que hacer el array más grande y meter más imagenes...¿te atreves? :D

const cardArray=cardArrayOrderer.sort(()=>Math.random()-0.5) //ordenamos los elementos del arreglo aleatoriamente

const tableroDiv=document.querySelector(`div[data-function="grid"]`);
tableroDiv.setAttribute("class", "b-grid");
let carta1= null

let score=0
const scoreH3=document.querySelector(`span[data-function="score"]`);
scoreH3.textContent=score

let attempts=0
const attemptsH3=document.querySelector(`span[data-function="attempts"]`);
attemptsH3.textContent=attempts

let cardBlock= false

for (let i = 0; i < cardArray.length; i++) {
    const cardDiv=document.createElement('div');
    tableroDiv.appendChild(cardDiv);
    
    const cardImg=document.createElement("img")
    cardImg.setAttribute("class", "b-grid img");
    cardImg.setAttribute("src", "../public/exercise-1/universe.svg");
    cardDiv.appendChild(cardImg); 

    cardImg.addEventListener("click", function(){
      if(cardBlock || cardImg.getAttribute("src") === "../public/exercise-1/tick.svg") {
        return}
      attempts++
      attemptsH3.textContent=Math.floor(attempts/2)
// Verificar si la carta ya ha sido validada o si se hizo clic en la misma carta dos veces.
if (cardImg.getAttribute("src") === "public/exercise-1/tick.svg" || carta1 === cardImg) {
  return; // La jugada no es válida.
}

cardImg.setAttribute("src", cardArray[i].img); // Mostrar la imagen correspondiente al hacer clic.

if (!carta1) {
  carta1 = cardImg;
} else {
  // Se ha seleccionado una segunda carta.
  if(carta1.getAttribute("src") === cardImg.getAttribute("src") &&
    carta1.getAttribute("src") === "../public/exercise-1/tick.svg" && cardImg.getAttribute("src") === "../public/exercise-1/tick.svg"){
    cardBlock=true
  }
  if (carta1.getAttribute("src") !== cardImg.getAttribute("src")) {
      // Las cartas no son iguales.
      cardBlock=false
      setTimeout(()=>{
          carta1.setAttribute("src", "../public/exercise-1/universe.svg");
          cardImg.setAttribute("src", "../public/exercise-1/universe.svg");
          carta1 = null;
      },1000)
      }else {
        // Las cartas son iguales, se valida la jugada.
        setTimeout(()=>{
        carta1.setAttribute("src", "../public/exercise-1/tick.svg");
        cardImg.setAttribute("src", "../public/exercise-1/tick.svg");
        carta1 = null;
        score++
        scoreH3.textContent=score
        if(score===cardArray.length/2){
            alert("Felicidades, has ganado!") 
        }})
    }
    }console.log(score);
  }
);
}       

