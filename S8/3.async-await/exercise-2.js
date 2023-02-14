// Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para 
// usar .fetch() tendrás que probar el ejercicio en el navegador;


async function getCharacters () {
    const api=await fetch('https://rickandmortyapi.com/api/character')
    const res = await api.json()
    return console.log(res)
}

getCharacters();
