// Basandote en el siguiente html,inserta una p con el texto 
// 'Voy en medio!' entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.

const body=document.getElementsByTagName('body')
const p=document.createElement('p')
const div=document.getElementsByTagName('div')
p.innerHTML='Voy en medio!'
document.body.insertBefore(p, div[1])
