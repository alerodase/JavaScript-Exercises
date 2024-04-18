// Basandote en el html siguiente, 
// elimina el elemento que tenga la clase
// .fn-remove-me.


const p=document.querySelector("p");
if(p.classList.contains('fn-remove-me')){
    p.parentNode.removeChild(p);
}else{
   alert("No hay elementos con la clase fn-remove-me")}