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

  for (let i = 0; i < res.length; i++) {
    const divImg = document.querySelector('div[data-function="planets"]');
    const characterDiv = document.createElement('div');

    divImg.appendChild(characterDiv);
    const imgPlanet = document.createElement('img');
    imgPlanet.setAttribute('src', res[i].image);
    imgPlanet.setAttribute('style', 'margin:50px; height:25%; width:25%');
    divImg.appendChild(imgPlanet);

    async function getCharacter() {
;
      const apiCharacter = await fetch(`http://localhost:3000/characters?idPlanet=${res[i].id}`);
      const characters = await apiCharacter.json();
      for (let j = 0; j < characters.length; j++) {
        const characterCard = document.createElement('div');
        const characterName = document.createElement('h4');
        characterName.textContent = `${characters[j].name}`;
        const characterAvatar = document.createElement('img');
        characterAvatar.setAttribute('src', `${characters[j].avatar}`);
        characterAvatar.setAttribute('style', `width:25%; height:25%`);

        characterDiv.appendChild(characterCard);
        characterCard.appendChild(characterName);
        characterCard.appendChild(characterAvatar);
      }
    }
    imgPlanet.addEventListener('click', () => {
      getCharacter();
    });
  }
}
getPlanets();
