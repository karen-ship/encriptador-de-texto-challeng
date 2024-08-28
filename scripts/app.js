
function mostrarEncriptado(){
    let salida = document.getElementsByClassName("textarea-salida")[0];
    salida.innerHTML = textoEncriptado();
    return;
}

function preparar(){
    let valor = document.getElementsByClassName("textarea-salida")[0];
    
}

function textoEncriptado(){
    let entrada = document.getElementsByClassName("textarea-entrada")[0];
    let valorEntrada = entrada.value;
    let encriptado = encriptar(valorEntrada);

    return encriptado;
}


function textoDesencriptado(){
    let entrada = document.getElementsByClassName("textarea-entrada")[0];
    let valorEntrada = entrada.value;
    let desencriptado = desencriptar(valorEntrada);
    console.log(desencriptado);

    return desencriptado;
}


// Función para encriptar el texto
function encriptar(texto) {
    let encriptado = texto.replace(/e/gi, "enter")
                          .replace(/i/gi, "imes")
                          .replace(/a/gi, "ai")
                          .replace(/o/gi, "ober")
                          .replace(/u/gi, "ufat");
    return encriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    let desencriptado = texto.replace(/enter/gi, "e")
                             .replace(/imes/gi, "i")
                             .replace(/ai/gi, "a")
                             .replace(/ober/gi, "o")
                             .replace(/ufat/gi, "u");
    return desencriptado;
}

// Ejemplo de uso
/*
let textoOriginal = "Elefante";
let textoEncriptado = encriptar(textoOriginal);
let textoDesencriptado = desencriptar(textoEncriptado);

console.log("Texto original: " + textoOriginal);
console.log("Texto encriptado: " + textoEncriptado);
console.log("Texto desencriptado: " + textoDesencriptado);
*/

