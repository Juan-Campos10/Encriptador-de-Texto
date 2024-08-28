
const d = document;
const texArea = d.querySelector(".Area_Texto");
const imagenresultado = d.querySelector(".Imagen_Resultado");
const loaderrayo = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".Titulo_Resultado");
const resultadoTexto = d.querySelector(".Texto_Resultado");
const botonEncriptar = d.querySelector(".Boton_ecriptar");
const botonDesencriptar = d.querySelector(".Boton_ecriptar");
const botonCopiar = d.querySelector(".Boton_Resultado");



const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];



//funcion de Encriptamiento
function encriptarmensaje(mensaje){
    let mensajeEncriptado= "";
    for(let i = 0; i < mensaje.length; i++){
    let letra = mensaje [i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1];
            break;
        }
    }    
    mensajeEncriptado += encriptada;
    }

    return mensajeEncriptado;
}

//Funcion de desencriptamiento
function desencriptarmensaje (mensaje){
    let mensajedesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajedesencriptado = mensajedesencriptado.replace(regex,llaves[i][0]);
    }
return mensajedesencriptado;
}

texArea.addEventListener("input", (e)=>{
    imagenresultado.style.display = "none";
    loaderrayo.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje";
    resultadoTexto.textContent = "";
});



botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = texArea.value.toLowerCase(); // Corrección aquí
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El Resultado es:";
});