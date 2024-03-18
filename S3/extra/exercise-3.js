// Dado el siguiente html y javascript.
// Utiliza el array para crear dinamicamente
// una lista ul > li de
// elementos en el div de html con el atributo
// data-function="printHere".

const cars = ['Mazda 6', 
'Ford fiesta', 
'Audi A4', 
'Toyota corola'];

const ul= document.createElement("ul")
const div=document.querySelector(('[data-function="printHere"]'))
div.appendChild(ul)

for (const car of cars) {
    const li=document.createElement("li");
    ul.appendChild(li);
    li.innerHTML=car
}