// En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada 
// petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z'  etc.

// EJ: El nombre Abel tiene un 22 porciento de ser de ET y 
// un 6 porciento de ser de MZ.

const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => obtenerDatos(),);

async function obtenerDatos() {
  const api = await fetch(`https://api.nationalize.io?name=${input.value}`);
  const obj = await api.json();

   for (const objeto of obj.country) {
    const p=document.createElement('p')
    document.body.appendChild(p)
   p.innerHTML=`El nombre ${input.value} tiene un ${objeto.probability*100} % de ser de ${objeto.country_id}`
   }

  console.log(obj);
}
