// En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. 
// Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.



const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const{name:carName, itv}=car
const[year1,year2,year3]=car.itv

console.log(carName + " " + year2);