// Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


const divs=document.getElementsByClassName("fn-insert-here")

// for (let i = 0; i < divs.length; i++) {
//     divs.append
// }

for (const div of divs) {
    const p= document.createElement("p")
p.innerHTML="Voy dentro!"
div.appendChild(p)
}