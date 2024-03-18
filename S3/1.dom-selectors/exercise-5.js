const characters = document.querySelectorAll(`[data-function="testMe"]`)

characters.forEach(character=>{
    console.log(character.innerHTML);
})