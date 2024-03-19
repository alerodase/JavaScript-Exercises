// Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (let i = 0; i < countries.length; i++) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const h4 = document.createElement("h4");
  h4.innerHTML = countries[i].title + " " + (1 + i);
  const img = document.createElement("img");
  img.setAttribute("src", countries[i].imgUrl);
  div.appendChild(h4);
  div.appendChild(img);
  const btn = document.createElement("button");
  btn.innerHTML = "Eliminar la foto " + (i + 1);
  div.appendChild(btn);

  btn.addEventListener("click", () => {
    btn.parentNode.remove();
  });
}

const btnEliminarUltimo = document.createElement("button");
btnEliminarUltimo.innerHTML = "Eliminar ultimo";
document.body.appendChild(btnEliminarUltimo);

btnEliminarUltimo.addEventListener("click", () => {
 divs=document.querySelectorAll("div");
 const ultimoDiv = divs[divs.length - 1];
  if (ultimoDiv) {
    ultimoDiv.remove();
  } else {
    alert("No hay elementos para eliminar.");
  }

});
