let win = window; // Imprime tres propiedades
let dom = document; // Imprime como tal el dom
let body = dom.body;
let divs = dom.querySelectorAll("div"); // Encuentra todos los div
let div = document.querySelector("div"); // Toma el primer div
let form = dom.forms;
let css = dom.links;
let imagenes = dom.images;
let parrafos = dom.getElementById("documento"); // Selecciona los parrafos
let parrafos2 = dom.querySelector("#documento"); // seleccion del parrafo
let container = dom.querySelectorAll(".container"); // Selecciona los container

let atributo = dom.querySelector("#input").name;
let ul = dom.querySelectorAll(".list");
let li = dom.querySelectorAll(".item");
let otra = dom.querySelectorAll("ul.list > li.item");

let api = dom.querySelector("#api");

let lista = [...body.children];
lista.forEach((e) => {
  console.log(e)
})

console.log(win);
console.log(dom);
console.log(dom.doctype); // Imprime el doctype
console.log(dom.head); // Imprime el head del html
console.log(body); // Imprime el body del html
console.log(body.children[0]); // Imprime el header
console.log(body.children[1]); // Imprime el main
console.log(body.children[2]); // Imprime el script 
console.log(divs) // Muestra todos los div del documento
console.log(div) // Imprime el prime div
console.log("Formularios ---- ", form);
console.log(`Links ----- ` , css);
console.log(imagenes);
console.log(parrafos);
console.log(parrafos2)
console.log(container)
console.log(atributo)
console.log(ul);
console.log(li);
console.log(otra)
let palabra = dom.getElementById("api");
palabra.innerHTML = api.textContent.toUpperCase()
console.log(api);
console.clear();


console.clear();
console.log(body.childNodes)


let cards = dom.getElementById("cards");
console.log(cards)
// console.log(cards.children);
let card = [...cards.children]; // Convertir el HtmlCollection a arreglo
console.log(card)
card.filter((e, index) => {
  if (index % 2 !== 0) {
    e.classList.toggle("bg-gray");
    console.log(e)
    // console.log(e.children[1].children[1].classList.add("color-black"))
    
  }
})
console.clear();

const formulario = dom.getElementById("search");
formulario.setAttribute("enctype", "multipart/form-data")
console.log(formulario)
console.log(formulario.getAttribute("action"));
const i = dom.querySelector(".input");
console.log(i)

if (i.getAttribute("autocomplete") === "off") {
  console.log("Funciona")
  i.setAttribute("autocomplete", "on")
}
else {
  console.log("No funciona")
}

i.setAttribute("placeholder", "Se modifico por JS"); //  Agregar atributos
i.removeAttribute("placeholder"); // Eliminar atributos
i.setAttribute("placeholder", "Wasaaaa"); //

console.clear();

// Custom properties CSS
const $html = dom.documentElement;
const mineshaft = getComputedStyle($html).getPropertyValue("--Mineshaft");
const white = getComputedStyle($html).getPropertyValue("--white")
$html.style.setProperty("--Mineshaft", white)
$html.style.setProperty("--white", mineshaft)

const p = dom.getElementById("elementos");
p.outerHTML = `<b> Cambiando esto </b> a negrita` 