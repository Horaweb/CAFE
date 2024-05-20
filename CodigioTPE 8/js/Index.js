"use strict"
//permite hacer responsivo el menu agregando o quitando la clase oculto
document.querySelector(".barras").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("oculto");
}); 
  //Permite detallar mas la tabla cuando estas en una pantalla de tablet o mas grande
  let botonDetalles = document.querySelector("#detalle-tabla");
  if(botonDetalles!== null){
  botonDetalles.addEventListener("click", () => {
    document.querySelectorAll(".col-flexibles").forEach((element) => {
      element.classList.toggle("oculto");
      botonDetalles.innerHTML = element.classList.contains("oculto")
        ? "Mostrar Detalles"
        : "Ocultar Detalles";
    });
  });
}



