// Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul= document.createElement("ul")
document.body.appendChild(ul)
for (const app of apps) {
    const li = document.createElement("li");
    ul.appendChild(li)
    li.innerHTML= app
}
