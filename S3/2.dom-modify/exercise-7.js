// Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

const p= document.querySelectorAll(".fn-remove-me")
p.forEach(elemento=>{
    elemento.parentNode.removeChild(elemento)
})