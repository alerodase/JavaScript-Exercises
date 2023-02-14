// En base al siguiente javascript, usa destructuring para crear 
// 2 variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {nombre: 'Bengal Tiger', race: 'Tiger'}
};
const {nombre, race}=animalFunction()
console.log(nombre);
console.log(race);