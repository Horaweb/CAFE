//permite hacer responsivo el menu agregando o quitando la clase oculto
document.querySelector(".barras").addEventListener("click", () => { document.querySelector("nav").classList.toggle("oculto"); });
//muestra las politicas de privacidad agregando o quitando la clase oculto
document.querySelector("#Politica-de-privacidad").addEventListener("click", () => { document.querySelector("#Politica-de-privacidad ~ article").classList.toggle("oculto"); });
//muestra los terminos de uso agregando o quitando la clase oculto
document.querySelector("#Terminos-de-uso").addEventListener("click", () => { document.querySelector("#Terminos-de-uso ~ article").classList.toggle("oculto"); });
//Permite detallar mas la tabla cuando estas en una pantalla de tablet o mas grande
let botonDetalles = document.querySelector("#detalle-tabla");
botonDetalles.addEventListener("click",
    () => {
        document.querySelectorAll(".col-flexibles").forEach(element => {
            element.classList.toggle("oculto");
            botonDetalles.innerHTML = (element.classList.contains("oculto")) ? "Mostrar Detalles" : "Ocultar Detalles"
        })
    });
