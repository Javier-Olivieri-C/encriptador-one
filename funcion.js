//Función Para Encriptar el Texto
function encriptar(){
    var texto = document.getElementById("textoAEncriptar").value.toLowerCase();

    var textoEncriptado = texto.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("texto-muestra").style.display = "block";
    document.getElementById("textoAMostrar").innerHTML = textoEncriptado;
    document.getElementById("textoAEncriptar").value = "";
}

//Función Para Desencriptar el Texto
function desencriptar(){
    var texto = document.getElementById("textoAEncriptar").value.toLowerCase();

    var textoEncriptado = texto.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoAMostrar").innerHTML = textoEncriptado;
    document.getElementById("textoAEncriptar").value = "";
}

//Función para Copiar el Texto
function copiar(){
    var a = document.querySelector("#textoAMostrar");
    a.select();
    document.execCommand("copy");
}

document.getElementById("texto-muestra").style.display = "none";

var input = document.querySelector("#textoAEncriptar");
input.focus();

var botonParaEncriptar = document.querySelector("#botonEncriptar");
botonParaEncriptar.onclick = encriptar;

var botonParaDesencriptar = document.querySelector("#botonDesencriptar");
botonParaDesencriptar.onclick = desencriptar;

var botonParaCopiar = document.querySelector("#botonCopiar");
botonParaCopiar.onclick = copiar;