// En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

// Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.

async function getApi() {
    try{const api= await fetch("https://pokeapi.co/api/v2/pokemon?offset=&limit=2000");
    const res= await api.json()
    for (let i = 0; i < res.results.length; i++) {
       const div= document.createElement("div")
       const p= document.createElement("h2")

        document.body.appendChild(div)
        div.appendChild(p)

        p.innerHTML=res.results[i].name

        const pkm= await fetch(res.results[i].url)
            const imagen = await pkm.json()
            const img= document.createElement("img")
            div.appendChild(img)
            img.setAttribute("src", imagen.sprites.front_default)
        
    }


    console.log((res))}
    catch(error){
        console.error(`Da el siguiente error ${error}`)
    }
}
getApi()