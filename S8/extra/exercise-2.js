// Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.

// Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date. Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
  
// Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>`` para su .title, .date y .description respectivamente.
  
// Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho...
    

async function getData(){
    let entradasDiario=[]
    const data= await fetch("http://localhost:3000/diary");
    const res= await data.json()
    entradasDiario= await res.sort((a,b)=>new Date(a.date).getTime()- new Date(b.date).getTime())
    // const p = document.createElement("p")
    // document.body.appendChild(p)
    console.log(entradasDiario)
    for (let i = 0; i < res.length; i++) {
 
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const h5 = document.createElement("h5")
    const p = document.createElement("p")
    const btn=document.createElement("button")

    document.body.appendChild(div)
    div.appendChild(h3)
    div.appendChild(h5)
    div.appendChild(p)
    div.appendChild(btn)

    h3.innerHTML= entradasDiario[i].title
    h5.innerHTML= entradasDiario[i].date
    p.innerHTML= entradasDiario[i].description
    btn.innerHTML="Eliminar"

    btn.addEventListener("click", ()=>{
        div.remove()
    })
    }

}
getData()
