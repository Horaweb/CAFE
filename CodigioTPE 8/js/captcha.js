let form = document.querySelector("#form");
let captcha_ingresado = document.querySelector("#captcha_ingresado");
let mensaje_captcha = document.querySelector("#mensaje_captcha")
const entrada = "abcdefghijklmnopqrstuvwxyz234567890+-*/"
const longitud_captcha = 7;
let captcha = document.querySelector("#captcha");
let valor_captcha = obtenerCaptcha(longitud_captcha);
captcha.innerHTML = valor_captcha;

function obtenerCaptcha(longitud_captcha) {
    let captcha_generado = ""
    for (let i = 0; i < longitud_captcha; i++) {
        captcha_generado += entrada[Math.floor(Math.random() * entrada.length)]
    }
    return captcha_generado
}
form.addEventListener("submit", validar)


function validar(e) {
    e.preventDefault()
    console.log(e)
    console.log(captcha_ingresado)
    if (captcha_ingresado.value.toLowerCase() === valor_captcha) {
        mensaje_captcha.innerHTML = "Su mensaje ha sido enviado. Pronto nos comunicaremos con usted! GRACIAS!";

    }
    else {
        mensaje_captcha.innerHTML = "Captcha INCORRECTO!";
        valor_captcha = obtenerCaptcha(longitud_captcha);
        captcha.innerHTML = valor_captcha;
    }
}

