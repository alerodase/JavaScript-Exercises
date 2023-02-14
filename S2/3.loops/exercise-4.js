//Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

for (let i = toys.length-1; i >= 0; i--) {
  if (toys[i].name.includes("gato")) {
    toys.splice(i, 1);
  }
}

console.log(toys);

//entiendo que es un for let i porque necesito saber la posicion de cada objeto para poder eliminar los que incluyan la palabra gato