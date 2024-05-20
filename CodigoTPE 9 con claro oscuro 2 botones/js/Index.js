"use strict"

let body = document.querySelector("body");

//permite hacer responsivo el menu agregando o quitando la clase oculto
document.querySelector(".barras").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("oculto");
});
  

/* CLaro/ Oscuro */
document.querySelector("#btn_claro").addEventListener("click",prender);
  document.querySelector("#btn_oscuro").addEventListener("click",apagar);
  
  prender();

  function prender(){
    document.querySelector("#fondo").classList.add("prendido")
    document.querySelector("#fondo").classList.remove("apagado")

    }

    function apagar(){
      document.querySelector("#fondo").classList.add("apagado")
      document.querySelector("#fondo").classList.remove("prendido")
      }










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

  const  valor_captcha = "1234" 

  function validar(e){
    e.preventDefault()
    console.log(e)
    console.log(captcha_ingresado)
    if (captcha_ingresado.value === valor_captcha){
        mensaje_captcha.innerHTML = "Su mensaje ha sido enviado. Pronto nos comunicaremos con usted! GRACIAS!";
        
    }
    else{
        mensaje_captcha.innerHTML = "Captcha INCORRECTO!";
        
    }
  }
  
  
  

  document.getElementById("btn_claro").addEventListener("click",prender);
  document.getElementById("btn_oscuro").addEventListener("click",apagar);
  
  prender();

  function prender(){
    document.getElementById("fondo").classList.add("prendido")
    document.getElementById("fondo").classList.remove("apagado")


    }

    function apagar(){
      document.getElementById("fondo").classList.add("apagado")
      document.getElementById("fondo").classList.remove("prendido")
      }

    

  