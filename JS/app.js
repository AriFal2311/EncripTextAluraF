var textEncriptar = document.getElementById("text_encriptar");
var btnEncriptar = document.getElementById("btn_encriptar");
var btnDesencriptar = document.getElementById("btn_desencriptar");
var btnCopiar = document.getElementById("btn_copiar");
var textResultado = document.getElementById("texto_resultado");
var nadaIngresado = document.getElementById("nada_ingresado");
var despues = document.getElementById("despues");

textEncriptar.addEventListener("input", function(){
    let texto = textEncriptar.value;
    let textoLimpio = texto.replace(/[^a-z\s]/g, '');

    if (texto !== textoLimpio) {
        despues.classList.add("error");
    } else {
        despues.classList.remove("error");
    }
    textEncriptar.value = textoLimpio;
})

function ocultar(textoEncriptado){ 
    if( textoEncriptado !==""){
        textResultado.style.display = "block";        
        nadaIngresado.style.display = 'none';     
        btnCopiar.style.display = 'block';   
    }else{
        textResultado.style.display = "none";
        btnCopiar.style.display = 'none';
        nadaIngresado.style.display = 'block';
    }
}

function encriptar() {
    let textoE = textEncriptar.value.trim();
    let textoEncriptado = "";
    for(let i=0; i<textoE.length; i++){
        switch(textoE[i]){
            case "a":
                textoEncriptado += "ai";
                break;
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += textoE[i];
                break;
        }
    }   
    ocultar(textoEncriptado);
    textResultado.innerText = textoEncriptado;   
    textEncriptar.value   = "";
    btnDesencriptar.style.background= "none";
}

function desencriptar() {
    let textoEncriptado = textEncriptar.value.trim();
    let textoDesencriptado = textoEncriptado
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    ocultar(textoDesencriptado);
    textResultado.innerText = textoDesencriptado;
    textEncriptar.value   = "";
}

function copiartexto(){
    const copiart = textResultado.innerText;
    navigator.clipboard.writeText(copiart).then(function() {
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
}
document.getElementById("logo").addEventListener("click", function () {
    const fondos = document.querySelectorAll(".fondo");
    fondos.forEach(function(fondo) {
        if (fondo.style.display === "block") {
            fondo.style.display = "none";
        } else {
            fondo.style.display = "block";
        }
    });   
    
});
let aumento = 6; 
document.getElementById("tamano").addEventListener("click", function() {
    const elements = document.querySelectorAll("*");
    elements.forEach(function(element) {
        let currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        let newFontSize = parseFloat(currentFontSize) + aumento;
        element.style.fontSize = newFontSize + "px";
    });

    aumento = aumento === 6 ? -6 : 6;
});

const traducciones = {
    es: {
        titulo: "ENCRIPTADOR DE TEXTO",
        placeholder: "Ingrese el texto aqui",
        botonEncript: "Encriptar",
        botonDesencript: "Desencriptar",
        botonCopiar: "Copiar",
        mensaje1: "Ningún mensaje fue encontrado",
        mensaje2: "Ingresa el texto que desees encriptar o desencriptar.",
        mensajeError: "Solo letras minúsculas y sin acentos"

    },
    en: {
        titulo: "TEXT ENCRYPTOR",
        placeholder: "Enter text here",
        botonEncript: "Encrypt",
        botonDesencript: "Decrypt",
        botonCopiar: "Copy",
        mensaje1: "No message found",
        mensaje2: "Enter the text you want to encrypt or decrypt.",
        mensajeError: "Only lowercase letters and no accents"
    }
};

function cambiaridioma(e){
    const currentLanguage = e;
    if (currentLanguage === "ES") { 
        cambiarIdioma("es");
        document.getElementById("btnesp").classList.add("selected");        
        document.getElementById("btneng").classList.remove("selected");
    } else {       
        document.getElementById("btneng").classList.add("selected");        
        document.getElementById("btnesp").classList.remove("selected");
        document.getElementById("btnesp").style.padding="10px";
        document.getElementById("btneng").style.marginBottom="0px";
        document.getElementById("btnesp").style.marginBottom="10px";
        cambiarIdioma("en");
    }
}

function cambiarIdioma(idioma) {
    if (document.querySelector("h1")) {
        document.querySelector("h1").innerText = traducciones[idioma].titulo;
    }

    if (textEncriptar) {
        textEncriptar.setAttribute("placeholder", traducciones[idioma].placeholder);
    }

    if (btnEncriptar) {
        btnEncriptar.innerText = traducciones[idioma].botonEncript;
    }

    if (btnDesencriptar) {
        btnDesencriptar.innerText = traducciones[idioma].botonDesencript;
    }

    if (btnCopiar) {
        btnCopiar.innerText = traducciones[idioma].botonCopiar;
    }

    if (document.querySelector("h2")) {
        document.querySelector("h2").innerText = traducciones[idioma].mensaje1;
    }

    if (document.querySelector(".explicar")) {
        document.querySelector(".explicar").innerText = traducciones[idioma].mensaje2;
    }

    if (document.getElementById("error")) {
        document.getElementById("error").innerText = traducciones[idioma].mensajeError;
    }
}


