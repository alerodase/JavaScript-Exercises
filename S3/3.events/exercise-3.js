//Basandote en el siguiente html, añade un evento 'input'
// que ejecute un console.log con el valor del input.

const input=document.querySelector('[type="text"]')
input.addEventListener('input',()=>{
    console.log(input.value);
} )