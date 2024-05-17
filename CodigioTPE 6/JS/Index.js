"use strict"

let body = document.querySelector("body");

//permite hacer responsivo el menu agregando o quitando la clase oculto
document.querySelector(".barras").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("oculto");
});
  //muestra las politicas de privacidad agregando o quitando la clase oculto
  document
    .querySelector("#Politica-de-privacidad")
    .addEventListener("click", () => {
      document
        .querySelector("#Politica-de-privacidad ~ article")
        .classList.toggle("oculto");
    });
  //muestra los terminos de uso agregando o quitando la clase oculto
  document.querySelector("#Terminos-de-uso").addEventListener("click", () => {
    document
      .querySelector("#Terminos-de-uso ~ article")
      .classList.toggle("oculto");
  });
if(document.location.pathname.split("/").pop() ==="variedades.html"){
  //Permite detallar mas la tabla cuando estas en una pantalla de tablet o mas grande
  let botonDetalles = document.querySelector("#detalle-tabla");
  botonDetalles.addEventListener("click", () => {
    document.querySelectorAll(".col-flexibles").forEach((element) => {
      element.classList.toggle("oculto");
      botonDetalles.innerHTML = element.classList.contains("oculto")
        ? "Mostrar Detalles"
        : "Ocultar Detalles";
    });
  });
}


/*
  CAPTCHA
  */

  
  let form = document.querySelector("#form");
  let captcha_ingresado = document.querySelector("#captcha_ingresado");
  let mensaje_captcha = document.querySelector("#mensaje_captcha")

 form.addEventListener("submit", validar)

  
  function validar(e){
    e.preventDefault()
    console.log(e)
    console.log(captcha_ingresado)
    if (captcha_ingresado.value === "1234"){
        mensaje_captcha.innerHTML = "Su mensaje ha sido enviado. Pronto nos comunicaremos con usted! GRACIAS!";
        
    }
    else{
        mensaje_captcha.innerHTML = "Captcha INCORRECTO!";
        
    }
  }
  
  