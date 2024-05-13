"use strict"

document.querySelector(".barras").addEventListener("click", ()=>{document.querySelector("nav").classList.toggle("oculto");});

let form = document.querySelector('#form');
form.addEventListener('submit', enviar)

function enviar(e) {
    e.preventDefault();
    console.log('se envió el formulario')
}


