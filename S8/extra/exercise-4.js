// Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

// Para ello, ejecutemos `json-server --watch exercise-4.json`. En este caso el endpoint con los personajes es `http://localhost:3000/characters`.

// La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` y, que si el usuario hace click en alguno de los planetas, salga debajo los personajes que están asociados por el .idPlanet a ese planeta en cuestión, mostrando tanto sus imágenes .avatar como sus nombres .name. Para poder obtener la información de los personajes podemos hacer un filtro de los personajes llamando a la url, por ejemplo `http://localhost:3000/characters?idPlanet=1` y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.

// Además de esto, agrega un buscador para poder filtrar los personajes por nombre una vez que has seleccionado el planeta. Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.

// Como extra podríamos hacer que si haces click a un personaje salga la descripción debajo. Como extra del extra haz que la descripción se oculte si vuelves a hacer click en el mismo personaje.

// json-server --watch C:\Users\alero\OneDrive\Escritorio\Upgrade\JavaScrip\ejerciciosJs\JavaScript-Exercises\exercise-4.js

async function getPlanets() {
  const api = await fetch('http://localhost:3000/planets');
  const res = await api.json();
  console.log(res);
  const characterDiv = document.createElement('div');
  characterDiv.setAttribute("id", "character-loaded")
  characterDiv.setAttribute("style", "display:flex")

  for (let i = 0; i < res.length; i++) {
    const divImg = document.querySelector('div[data-function="planets"]');

    divPlanet=document.createElement("div")
    divImg.appendChild(divPlanet)
    const imgPlanet = document.createElement('img');
    imgPlanet.setAttribute('src', res[i].image);
    divPlanet.setAttribute('style', 'margin:50px; height:25%; width:25%');
    imgPlanet.setAttribute('style', 'margin:50px; height:100%; width:100%');
    divPlanet.appendChild(imgPlanet);
    divPlanet.appendChild(characterDiv)
    const divInput=document.createElement("div")
    divPlanet.appendChild(divInput)
    divPlanet.insertBefore(divInput,characterDiv)



    async function getCharacter() {
      const apiCharacter = await fetch(`http://localhost:3000/characters?idPlanet=${res[i].id}`);
      const characters = await apiCharacter.json();

      const input=document.createElement("input")
      divInput.appendChild(input)

      for (let j = 0; j < characters.length; j++) {


      }
      // input.addEventListener("input", async ()=>{
      //   characterDiv.innerHTML=""
      //   characters.filter((x)=>x.name.includes(input.value))
      //   getCharacter()
      //   })
    }
    imgPlanet.addEventListener('click', () => {
      if(characterDiv.childElementCount===0){
      getCharacter();
}
    });    
  }
}
getPlanets();

async function getCharacterData(characterId){
  const res= await fetch(`http://localhost:3000/characters/${characterId}`)
  const data= await res.json()
return data
}

async function pintarUnCharacter(characterId){
  const characters= await getCharacterData(characterId)

  const characterCard = document.createElement('div');
  const characterName = document.createElement('h4');
  characterName.textContent = `${characters[characterId].name}`;
  const characterAvatar = document.createElement('img');
  characterAvatar.setAttribute('src', `${characters[characterId].avatar}`);
  characterAvatar.setAttribute('style', `width:50%; height:50%`);
  characterDiv.appendChild(characterCard);
  characterCard.appendChild(characterName);
  characterCard.appendChild(characterAvatar)
}