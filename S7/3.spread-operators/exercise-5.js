// Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo
// , usando spread operatos.


const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 
const colors1=[...colors]
colors1.splice(2,1)
const colores=colors1
console.log(colores);