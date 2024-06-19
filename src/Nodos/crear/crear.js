import { datos } from "./arreglo.js"; // Importar en este javascript
// Identificar el padre
const $padre = document.querySelector(".container");

// Crear un elemento
const nodo = document.createElement("p"); // Crear el nuevo nodo Parrafo
const texto = "Lorem ipsum dolor sit amet. puedo escribir lo que sea aca WAWAWAWAWAWAWAWAWAWAWAWAWAW"; // Nuevo texto
nodo.innerText = texto; // Se le coloca el texto al parrafo
$padre.appendChild(nodo); // Agregarle un nuevo hijo al padre que en este caso es container

// Crear otro elemento
const nodo2 = document.createElement("p"); // Crear un nuevo parrafo
const texto2 = "F EN EL CHAT"; // Nuevo texto del nuevo parrafo
nodo2.innerText = texto2;
$padre.appendChild(nodo2); // Agregando al padre 

// Identificar la lista desordenada
const list = document.querySelector("div.container > div.card > ul.list"); // Seleccion de la lista desordenada
console.log(list);

// Llamar a la lista de datos
// datos.map((e) => { // recorriendo el arreglo
//   let item = document.createElement("li"); // se crea un nuevo li por elemento del arreglo
//   item.innerText = e.name;
//   item.classList.add("item");
//   list.appendChild(item)
// });

// Crear el fragemnto
let fragmento = document.createDocumentFragment();

datos.map(e => {
  let li = document.createElement("li");
  li.textContent = e.name;
  li.classList.add("item");
  fragmento.appendChild(li);
})

list.appendChild(fragmento)
