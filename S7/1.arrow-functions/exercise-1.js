// Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. 
// Haz que la función muestre por consola la suma de los dos parametros. 

// - Ejecuta esta función sin pasar ningún parametro
// - Ejecuta esta función pasando un solo parametro
// - Ejecuta esta función pasando dos parametros

const suma= (a=10, b=5)=>{
    return a+b;
}
console.log(suma());
console.log(suma(7));
console.log(suma(7,6));