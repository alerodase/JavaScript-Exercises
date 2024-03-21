// En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io?name=';

const input=document.querySelector("input")
const button=document.querySelector("button")



async function obtener(){
    const finalUrl= baseUrl + input.value
    const api= await fetch(finalUrl);
    const response= await api.json();
    // p.innerHTML=JSON.stringify(response);
    for (let i = 0; i < response.country.length; i++) {
        const p = document.createElement("p");
        const btn=document.createElement("button")
   
        // document.p.querySelector("p")
        p.innerHTML=`el nombre ${input.value} tiene un ${Math.round(
        response.country[i].probability * 100)}% de ser de ${response.country[i].country_id}`   
        btn.innerHTML="X"

        btn.addEventListener("click", ()=>{
            p.remove();
            btn.remove()
        })

        document.body.appendChild(btn)
        document.body.appendChild(p) 

      
    }
    console.log(response);


}

button.addEventListener("click", ()=>{
   obtener();
    
})
