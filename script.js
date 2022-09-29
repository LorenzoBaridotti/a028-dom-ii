function adicionaItem(event) {
  const elemento = document.getElementById("container");
  const elementoNovo = document.createElement("article");
  elemento.insertAdjacentElement("beforeend", elementoNovo);
  elementoNovo.setAttribute("class", "item");
  elementoNovo.setAttribute("onclick", "removeItem(event)");
}

function removeItem(event) {
  event.target.remove();
}
