// En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.


const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]

function countLetterA(animals) {
    let count= 0
    for (let i = 0; i < animals.length; i++) {
        const animal = animals[i].toLowerCase()
        for (let j = 0; j < animal.length; j++) {
            if (animal[j] === 'a') {
                count++
            }
        }
    }
    return count}
console.log(countLetterA(animals))