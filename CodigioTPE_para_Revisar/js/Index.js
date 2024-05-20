"use strict";
let cuerpo = document.querySelector("body");
//utiliza el metodo toggle para agregar o quitar una clase pasada por parametro
function alternarClase(elemento, clase) {
  elemento.classList.toggle(clase);
}
//permite hacer responsivo el menu agregando o quitando la clase oculto
document.querySelector(".barras").addEventListener("click", () => {
  alternarClase(document.querySelector("nav"), "oculto");
});
//Permite detallar mas la tabla cuando estas en una pantalla de tablet o mas grande
let botonDetalles = document.querySelector("#detalle-tabla");
if (botonDetalles !== null) {
  botonDetalles.addEventListener("click", () => {
    document.querySelectorAll(".col-flexibles").forEach((elemento) => {
      alternarClase(elemento, "oculto");
      botonDetalles.innerHTML = elemento.classList.contains("oculto")
        ? "Mostrar Detalles"
        : "Ocultar Detalles";
    });
  });
}

let tema = document.querySelector(".boton-tema");

tema.addEventListener("click", () => {
  alternarClase(cuerpo, "oscuro");
  tema.innerHTML = cuerpo.classList.contains("oscuro") ? "Claro" : "Oscuro";
});
