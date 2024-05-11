//permite hacer responsivo el menu agregando o quitando la clase oculto
document.querySelector(".barras").addEventListener("click", ()=>{document.querySelector("nav").classList.toggle("oculto");});
//muestra las politicas de privacidad agregando o quitando la clase oculto
document.querySelector("#Politica-de-privacidad").addEventListener("click", ()=>{document.querySelector("#Politica-de-privacidad ~ p").classList.toggle("oculto");});
//muestra los terminos de uso agregando o quitando la clase oculto
document.querySelector("#Terminos-de-uso").addEventListener("click", ()=>{document.querySelector("#Terminos-de-uso ~ p").classList.toggle("oculto");});
