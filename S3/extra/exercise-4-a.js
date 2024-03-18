// Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen. 


const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const div= document.createElement("div")
document.body.appendChild(div)

for (const country of countries) {
    const h4=document.createElement("h4");
    h4.innerHTML=country.title
    const img=document.createElement("img");
    img.setAttribute("src", country.imgUrl)
    div.appendChild(h4)
    div.appendChild(img)
}