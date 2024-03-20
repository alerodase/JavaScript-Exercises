// En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

// EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

const baseUrl = 'https://api.nationalize.io?name=';

const input=document.querySelector("input")
const button=document.querySelector("button")
const p = document.createElement("p");
document.body.appendChild(p)


async function obtener(){
    const finalUrl= baseUrl + input.value
    const api= await fetch(finalUrl);
    const response= await api.json();
    // p.innerHTML=JSON.stringify(response);
    for (let i = 0; i < response.length; i++) {
        p.innerHTML=`el nombre ${input.value} tiene un ${Math.round(
        response.country[i].probability * 100)}% de ser de ${response.country[i].countre_id}`   
    }
    console.log(response);
}

button.addEventListener("click", ()=>{
   obtener();
    
})