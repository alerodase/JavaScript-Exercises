// En base al ejercicio anterior, crea un botón con el texto 'X'
// para cada uno de los p que hayas insertado y que si el
// usuario hace click en este botón eliminemos el parrafo asociado.

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const body = document.getElementsByTagName("body");

btn.addEventListener("click", () => obtenerDatos());

async function obtenerDatos() {
  const api = await fetch(`https://api.nationalize.io?name=${input.value}`);
  const obj = await api.json();

  for (const objeto of obj.country) {
    const p = document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML = `El nombre ${input.value} tiene un ${
      objeto.probability * 100
    } % de ser de ${objeto.country_id}`;
    const btnX = document.createElement("button");
    document.body.appendChild(btnX);
    btnX.innerHTML = "X";
    btnX.addEventListener("click", () => {
      document.body.removeChild(p);
      document.body.removeChild(btnX)
    });
  }

  console.log(obj);
}
