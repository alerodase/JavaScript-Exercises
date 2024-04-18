// Añade un botón a tu html con el id btnToClick y 
// en tu javascript añade el evento click que ejecute
//  un console log con la información del evento del click

const btn= document.createElement("button")
document.body.appendChild(btn)
btn.setAttribute("id","btnToClick")
btn.innerHTML= "Boton"

btn.addEventListener("click", ()=>{
    console.log("he hecho click");
})