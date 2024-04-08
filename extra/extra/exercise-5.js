// Al siguiente javascript no funciona como deberia...podrias arreglarlo?

// Debería mostrar por consola "Juan Pui".


function a(){
    return b();
}

function b(){
    const name = "Juan Pui"
    console.log(name)
}

a();
