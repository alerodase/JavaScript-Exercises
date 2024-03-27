// # Descripción

// En este ejercicio vamos a simular una batalla de rol, con dados y estadísticas por doquier!

// De nuevo, tendremos una api local que deberemos ejecutar con json-server `json-server --watch exercise-6.json` . La url en cuestión de los personajes sería
// `http://localhost:3000/characters`. Ten en cuenta que como usamos imágenes locales tienes que hacer el ejercicio en esta misma carpeta o llevarte la carpeta /public (carpeta con imágenes) donde tengas tus propios ejercicios.

// En este caso vamos a realizar una batalla entre dos razas a elegir por el usuario. Por lo tanto, lo primero que
// deberíamos hacer es una petición a personajes para imprimir sus datos en la página web. Tanto nombre, como imágenes y
// estadísticas.

async function getData(){
    const data= await fetch(`http://localhost:3000/characters/`)
    const resData=await data.json();
    return resData
}

async function drawAllCharacters(){
    const allCharacters=await getData()
    for (const character of allCharacters) {
        await drawCharacter(character.id)
    }
}

async function getCharacterData(characterId){
    const data= await fetch(`http://localhost:3000/characters/${characterId}`)
    const resData=await data.json();
    return resData
}

async function drawCharacter(characterId, container){
    const character= await getCharacterData(characterId)
    console.log(character);

    container= document.querySelector(`div[data-function="characters"]`)
    container.setAttribute("style","display:flex; justify-content:space-around")

    const characterCard=document.createElement("div")
    container.appendChild(characterCard)
    characterCard.setAttribute("id","card")

    const characterAvatar= document.createElement("img")
    characterAvatar.setAttribute("src",`${character.avatar}`)
    characterCard.appendChild(characterAvatar)
    characterAvatar.setAttribute("style","cursor:pointer")
    characterAvatar.addEventListener('click', () => {
        selectCharacters(character);
    });

    const characterName= document.createElement("h2")
    characterName.innerHTML=character.name
    characterCard.appendChild(characterName)

    const characterStats=document.createElement("ul")
    characterCard.appendChild(characterStats)

    const critic=document.createElement("li")
    const defense=document.createElement("li")
    const vitality=document.createElement("li")
    critic.innerHTML=`Critic: ${character.critic}`
    defense.innerHTML=`Defense: ${character.defense}`
    vitality.innerHTML=`Vitality: ${character.vitality}`
    characterStats.appendChild(critic)
    characterStats.appendChild(defense)
    characterStats.appendChild(vitality)

}

// async function chooseAvatar(characterId){

//             document.addEventListener("DOMContentLoaded",async()=>{

//                 const character = await getCharacterData(characterId);
        
//                 const characterCard = document.getElementById("card");
//                 console.log(characterCard);
//                 const p = document.createElement("p");
//                 p.innerHTML = "probando";
        
//                 characterCard.appendChild(p);
        

//                 return character;});
// }
// chooseAvatar(1);
// Cuando el usuario elija dos personajes, aparecerá un botón que diga "Luchar!". Una vez que el usuario haga click en el
// botón luchar se realizarán una serie de tiradas de dados que decidirán que raza es la ganadora (puedes simular estas
// tiradas haciendo un time out para que no salgan todos los resultados directamente).
let selectedCharacters=[]

async function selectCharacters(character){
if(selectedCharacters.length<2){
    selectedCharacters.push(character);
    console.log("Personajes seleccionados", character.name);
    await drawArena();
}else if(selectedCharacters===2){
    alert("Ya hay dos personajes seleccionados")

}else{
    alert("¡¡A LUCHAR!!")
} 


}
const arenaContainer=document.querySelector(`div[data-function="arena"]`)

async function drawArena(){

    for (let i = 0; i < selectedCharacters.length; i++) {
        await drawCharacter(selectedCharacters[i].id, arenaContainer);  
    }
}
drawArena();
drawAllCharacters()
// # Condiciones de victoria

// Para que una raza gane el combate tiene que dejar al contrincante con 0 puntos de vida (vitality). Para ello, Los
// personajes lanzarán los dados que tengan sus características (damage) de forma ordenada (primero una raza, luego la
// otra) y teniendo en cuenta las siguientes condiciones.

// Si la raza tiene tiene por ejemplo este daño:

// `"damage": ["2d6","1d10","2d20"]`

// Significa que tendrá que lanzar 2 dados de 6 caras, 1 de 10 caras y 2 de 20 caras por turno. Para simular una tirada
// aleatoria de dados podéis utilizar el siguiente código ``Math.floor(Math.random() * 10) + 1;``. Donde 10 es el numero
// máximo del dado.

// Por cada dado, tendremos que comprobar si el resultado coincide con el valor de la propiedad .critic del personaje. En
// caso afirmativo, el daño de ESE dado se multiplicará x2.

// ````
// Ejemplo de resultado de una tirada de humano:

// 4
// 2
// 8
// 10 x2 = 20
// 20
// 10 x2 = 20

// Daño total = 74
// ````

// Una vez que tengamos el daño completo, le restaremos el valor de la propiedad .defense del adversario.

// `Ejemplo de la anterior tirada contra un enano que tiene 15 de defensa: 74 - 15 = 59`

// Ese resultado, será el daño que el ha hecho el personaje al adversario, por lo cual, el resultado habría que restárselo
// a la vitalidad del adversario (vitality).

// `Ejemplo de vida restante del enano después del primer golpe del humano: 325 - 59 = 266`

// Una vez concluido el golpe de un personaje pasaríamos al otro que haría el mismo proceso.

// Este proceso se debería hacer constantemente hasta que uno de los personajes tenga 0 o menos puntos de vida. En cuyo
// caso, el adversario sería el ganador.

// Lo ideal es que una vez concluya una batalla, mostremos un botón para poder resetear el juego.

// Para terminar y por hacer más justa la batalla, que raza ataca primero se decidirá de manera aleatoria.

// **Mucha suerte a todos los contrincantes!**
