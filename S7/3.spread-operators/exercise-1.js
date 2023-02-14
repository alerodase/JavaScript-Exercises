// Dado el siguiente array, crea una copia usando spread operators.


const pointsList = [32, 54, 21, 64, 75, 43];
const list=[...pointsList]
console.log(list);
console.log(`Lista ordenada de menor a mayor: ${list.sort()}`);