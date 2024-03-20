// Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io?name=';

const input=document.querySelector("input")
const button=document.querySelector("button")
const p = document.getElementById("pintarAPI");


async function obtener(){
    const finalUrl= baseUrl + input.value
    const api= await fetch(finalUrl);
    const response= await api.json();
    // p.innerHTML=JSON.stringify(response);
    console.log(response);
}

button.addEventListener("click", ()=>{
   obtener();
    
})

