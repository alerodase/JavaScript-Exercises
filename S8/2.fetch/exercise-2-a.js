// Dado el siguiente javascript y html. Añade la funcionalidad
//necesaria usando fetch() para hacer una consulta
// a la api cuando se haga click en el botón,
//pasando como parametro de la api, el valor del input.
//https://api.nationalize.io?name=

const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => obtenerDatos());

async function obtenerDatos() {
  const api = await fetch(`https://api.nationalize.io?name=${input.value}`);
  const obj = await api.json();
  console.log(obj);
}
