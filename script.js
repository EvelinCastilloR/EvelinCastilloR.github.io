
const inputText = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputText.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputText.value = "";
}


function encriptar(stringEncriptada){

    let arrayCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < arrayCodigo.length; i++){
        if(stringEncriptada.includes(arrayCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(arrayCodigo[i][0], arrayCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputText.value);
    mensaje.value = textoEncriptado;
    inputText.value = "";
}

function desencriptar(stringDesencriptada){

    let arrayCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < arrayCodigo.length; i++){
        if(stringDesencriptada.includes(arrayCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(arrayCodigo[i][1], arrayCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";

}