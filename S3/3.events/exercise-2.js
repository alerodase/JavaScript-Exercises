// Basandote en el siguiente html, añade un evento 'focus' 
// que ejecute un console.log con el valor del input.

const ip= document.querySelector("input")

ip.addEventListener("focus", ()=>{
    console.log(ip.value);
})
