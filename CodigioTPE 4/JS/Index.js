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

let tema = document.querySelector(".boton-tema");

tema.addEventListener("click", () => {
    body.classList.toggle("oscuro");
    //tema.innerHTML=(body.classList.contains("oscuro"))? "claro" : "oscuro";
    if (body.classList.contains("oscuro")) {
      tema.innerHTML = "claro";
      localStorage.setItem("oscuro", 1);
    } else {
      tema.innerHTML = "oscuro";
      localStorage.setItem("oscuro", 0);
    }
    console.log(localStorage.getItem("oscuro"));
  });

  if (
    localStorage.getItem("oscuro") == 0 ||
    localStorage.getItem("oscuro") === null
  ) {
    console.log("clarooooo");
    body.classList.remove("oscuro");
  tema.innerHTML = "oscuro";

  } else {
  console.log(localStorage.getItem("oscuro"));
  tema.innerHTML = "claro";
  
      body.classList.add("oscuro");
    console.log("oscuro");
  }