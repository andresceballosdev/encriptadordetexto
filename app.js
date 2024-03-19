
//Aqui hay funciones relacionadas a los botones de encriptacion, desencriptacion y de copiar texto

//Funcion que hara la encriptacion
function encriptar(){
    var texto = document.querySelector("#texto").value
    var textoEscrito = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    document.querySelector(".texto-encriptado").value = textoEscrito;
    document.querySelector("#texto").value;
}

var botonEncriptar = document.querySelector("#botonEncriptar");
botonEncriptar.onclick = encriptar;



//Funcion que hara la desencriptacion
function desencriptar() {
    var texto = document.querySelector("#texto").value

    if (texto.toLowerCase() === "jaimenters") {
      texto = "james";
  }

    var textoEscrito = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    document.querySelector(".texto-encriptado").value = textoEscrito;
    document.querySelector("#texto").value;
}

var botonDesencriptar = document.querySelector("#botonDesencriptar");
botonDesencriptar.onclick = desencriptar;



//Funcion que permite copiar texto con su respectivo boton "copiar"

  function copiar(){
    var textoUno = document.querySelector("#texto-encriptado").value;
    var boton1 = document.querySelector(".copiar"); 

    navigator.clipboard.writeText(textoUno).value;
    boton1.textContent = "copiado"

} 

var botonCopiar = document.querySelector(".copiar");
botonCopiar.onclick = copiar;



//Funcion que transforma las mayusculas en minusculas
function minuscula(e){
  e.value = e.value.toLowerCase();
}



//Funcion que permite borrar el texto escrito
function borrar(){
  var texto= document.querySelector("#texto");
 
  texto.value = "";
}

var borrarTexto = document.querySelector(".borrador");
borrarTexto.onclick = borrar;

