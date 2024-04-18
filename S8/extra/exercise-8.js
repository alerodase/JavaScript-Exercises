// Añade un evento click al botón `Call a cat` que haga una petición a `https://api.thecatapi.com/v1/images/search`. Pinta la imagen que recibas de la api y añade además un botón `Eliminar` que elimine la imagen del gato.

// Puedes hacer click tantas veces como quieras en el botón `Call a cat`. De modo que si hago click 5 veces, pintaré 5 gatos


document.addEventListener("DOMContentLoaded", ()=>{
    const btnCall = document.createElement("button");
    document.body.appendChild(btnCall);
    btnCall.innerHTML = "Call a Cat";

    async function getApi(){
        const api= await fetch(`https://api.thecatapi.com/v1/images/search`)
        const res= await api.json()
        return res
    }

    async function drawCat(){

        const catCard=document.createElement("div")
        catCard.setAttribute("style", "display:flex; flex-direction:column")
        document.body.appendChild(catCard)
        const getCat= await getApi()

        const catImg= document.createElement("img")
        catImg.setAttribute("src", getCat[0].url)
        catImg.setAttribute("style",`width:${getCat[0].width}px; height:${getCat[0].height}px` )
        catCard.appendChild(catImg)

        const btnRemove= document.createElement("button")
        btnRemove.innerHTML="Eliminar gatito"
        catCard.appendChild(btnRemove)
        btnRemove.setAttribute("style",`width:${getCat[0].width}px;`)
        btnRemove.addEventListener("click", ()=>{
            document.body.removeChild(catCard)
        })

    }
    btnCall.addEventListener("click", ()=>{
        drawCat()
    }
)
});
