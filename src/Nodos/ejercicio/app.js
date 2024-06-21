import { data } from "./datos.js";
// Identificar el contenedor

let fragmento = document.createDocumentFragment();
let container = document.querySelector("#container");

data.map((e) => {
  // Crear y agregar el elemento div, agregandole la clase card
  let card = document.createElement("div");
  card.classList.add("card");

  // Crear y agregar el elemento div, agregandole la clase card__header
  let card__header = document.createElement("div");
  card__header.classList.add("card__header");

  // Crear y agregar el elemento h2, agregandole la clase card__title y asignandole el contenido de los objetos del modulo
  let titulo = document.createElement("h2");
  titulo.classList.add("card__title");
  titulo.textContent = e.title;

  // Agregarle al card__header el titulo
  card__header.appendChild(titulo)

  // Crear y agregar el elemento div, agregandole la clase card__body
  let card__body = document.createElement("div");
  card__body.classList.add("card__body");

  // Crear y agregar el elemento img, agrengandole su respectiva clase y su respectivo enlace del modulo importado
  let img = document.createElement("img");
  img.classList.add("card__img");
  img.setAttribute("src", e.src);

  // Crear y agregar el elemento p, agregandole su respectiva clase y su contenido de los modulos
  let parrafo = document.createElement("p");
  parrafo.classList.add("card__paragraph");
  parrafo.textContent = e.paragraph;

  // Crear y agregar el elemento a, agregandole 2 clases
  let enlace = document.createElement("a");
  enlace.classList.add("button", "button--outline");

  // Crear y agregar el elemento span, agregandole la clase y el contenido del span
  let span = document.createElement("span");
  span.classList.add("button__text");
  span.textContent = "Saber mas";

  // Crear y agregar el elemento i, con sus clases para el icono
  let icono = document.createElement("i");
  icono.classList.add("bx", "bxs-chevron-right", "button__icon");

  // Agregar el span y el icono al enlace
  enlace.appendChild(span);
  enlace.appendChild(icono);

  // Agregar al card__body la imagen, el parrafo y el enlace
  card__body.appendChild(img);
  card__body.appendChild(parrafo);
  card__body.appendChild(enlace);

  // Agregar a la card el card__header y el card__body
  card.appendChild(card__header);
  card.appendChild(card__body);

  // Agregar la card al fragmento para que no consuma mucha memoria
  fragmento.appendChild(card)
})

// Agregar clases a la seccion del HTML
container.classList.add("cards");
container.classList.add("container");

// Agregarle la card a la seccion del HTML
container.appendChild(fragmento);
