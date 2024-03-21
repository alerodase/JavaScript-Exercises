// Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

async function getCharacters() {
   try{ const api= await fetch("https://rickandmortyapi.com/api/character")
    const res = await api.json();
    for (let i = 0; i < res.results.length; i++) {
        const p=document.createElement("p");
    document.body.appendChild(p)
    p.innerHTML=JSON.stringify(res.results[i].name)    
    }
    const p=document.createElement("p");
    document.body.appendChild(p)
    p.innerHTML=JSON.stringify(res.info)  }
    
    catch (error){
        console.error(`Da el siguiente error ${error}`)
    }
}
getCharacters();
