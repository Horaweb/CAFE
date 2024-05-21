let form = document.querySelector("#formulario");
let captcha_ingresado = document.querySelector("#captcha_ingresado");
let mensaje_captcha = document.querySelector("#mensaje_captcha");
//creo un string de donde se va a crear el captcha
const entrada = "abcdefghijklmnopqrstuvwxyz1234567890+-*/";

const longitud_captcha = 7;
let captcha = document.querySelector("#captcha");
//llamo a la funcion para generar el captcha dinamico
let valor_captcha;

//funcion que genera el captcha y lo muestro desde html
obtenerCaptcha(longitud_captcha);
function obtenerCaptcha(longitud_captcha) {
  //cadena vacia para devolver el captcha
  let captcha_generado = "";
  for (let i = 0; i < longitud_captcha; i++) {
    //se ejecuta las veces que diga longitud
    captcha_generado += entrada[Math.floor(Math.random() * entrada.length)];
    //genera un numero aleatorio y obtiene el caracter del arreglo en esa posicion
  }
  valor_captcha = captcha_generado;
  captcha.innerHTML = valor_captcha;
}
form.addEventListener("submit", validar);

function validar(e) {
  //previene que el formulario se envie por defecto
  e.preventDefault();
  if (captcha_ingresado.value.toLowerCase() === valor_captcha) {
    mensaje_captcha.innerHTML = "Su mensaje ha sido enviado.";
  } else {
    mensaje_captcha.innerHTML = "Captcha INCORRECTO!";
    obtenerCaptcha(longitud_captcha);
    captcha_ingresado.value = "";
  }
}
