// Añade un botón a tu html con el id btnToClick 
//y en tu javascript añade el evento click
// que ejecute un console log con la información del evento del click

const btnClick=document.createElement('button')
btnClick.setAttribute("id","btnClick")
btnClick.innerHTML='Click'
document.body.appendChild(btnClick)
btnClick.addEventListener('click', ()=>{
console.log("informacion del evento del click");
})