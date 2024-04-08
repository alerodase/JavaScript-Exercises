// Ejecuta `json-server --watch exercise-10.json` para obtener un endpoint de personajes `http://localhost:3000/characters`.

// Pinta una galeria con los campos .name .image de los cinco primeros personajes. Para ello utilizaremos el endpoint con un filtro de página y limite de personajes de 5 por página `http://localhost:3000/characters?_page=1&_limit=5`.

// Una vez pintados, crea un botón que esté situado abajo con el texto `Cargar más`. Si hacemos click en este botón hará un nuevo fetch a la siguiente página de personajes por lo tanto la url debería de ser la página actual + 1 `http://localhost:3000/characters?_page=2&_limit=5`. De esta forma obtendremos 5 personajes más que tendremos que pintar debajo de los anteriores.

// La base de datos solo tiene 20 personajes así que lo ideal sería ocular el botón cuando estemos en la página 4.

const gallery= document.querySelector(`div[data-fn="characters"]`)


async function getOneCharacter(characterId){
    const api= await fetch(`http://localhost:3000/characters/${characterId}`)
    const res=await api.json()
    console.log(res);
    return res
}

async function drawOneCharacter(characterId){
const character= await getOneCharacter(characterId)
const characterCard=document.createElement("div")
characterCard.setAttribute("class", "b-gallery__item")

const characterName=document.createElement("p")
characterName.textContent=`Name : ${character.name}`
characterName.setAttribute("class","b-gallery__text")

const imgContainer=document.createElement("img")
imgContainer.setAttribute("class","b-gallery__img")
imgContainer.setAttribute("src", character.image)

characterCard.appendChild(characterName)
characterCard.appendChild(imgContainer)

gallery.append(characterCard)

}

let currentPage=0

async function drawFiveCharacters(){
    const api= await fetch(`http://localhost:3000/characters`)
    const res=await api.json()
    for (let i = currentPage*5; i < currentPage*5+5; i++) {
           await drawOneCharacter(res[i].id);
    }
    console.log(currentPage);
}drawFiveCharacters()

const btn=document.getElementById("btn")
btn.setAttribute("class","b-btn")
btn.textContent="Cargar más"
document.body.appendChild(btn)


btn.addEventListener("click", async ()=>{
        currentPage++
await drawFiveCharacters()
if(currentPage===3){
    btn.style.display="none"
}})   

