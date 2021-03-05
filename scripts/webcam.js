const pantallaVideo = document.getElementById("grabacion-video");
const iconoCargando = document.getElementById("icono-cargando");
const pSubirGifo = document.getElementById("p-subir-gifo");
const pText = document.getElementById("p-text");
const h2CrearGif = document.getElementById("h2-crear-gif");
const divGrabar = document.getElementById("grabar");
const btnsGif = document.getElementById("btns-gif");
const iconoGrabado = document.getElementById("gifo-grabado");
const paso1 = document.getElementById("parte1");
const paso2 = document.getElementById("parte2");
const paso3 = document.getElementById("parte3");
const contador = document.getElementById("p-contador");
const btnRepetir = document.getElementById("repetir-captura");
const btnComenzar = document.getElementById("btn-comenzar");
const btnGrabar = document.getElementById("btn-grabar");
const btnFinalizar = document.getElementById("btn-finalizar");
const btnSubir = document.getElementById("btn-subir-gifos");
const h2Permiso = document.getElementById("h2-permiso");
const permiso = document.getElementById("p-permiso");
let habilitado = false;
btnComenzar.addEventListener("click",()=>{
  
    
        h2CrearGif.style.display="none";
        pText.style.display="none"
        btnComenzar.style.display="none";
        h2Permiso.style.display="block";
        permiso.style.display="block";
        habilitado = true;
        paso1.style.background="#572EE5"
        paso1.style.color="#ffffff"
navigator.mediaDevices.getUserMedia({audio:false, video:true})
.then((stream)=>{
    if(habilitado == true){
    console.log(stream)
    pantallaVideo.srcObject = stream;
    pantallaVideo.style.display="block";
    btnGrabar.style.display="block";
    h2Permiso.style.display="none";
        permiso.style.display="none";
        paso2.style.background="#572EE5"
        paso2.style.color="#ffffff"
        paso1.style.background="#ffffff"
        paso1.style.color="#572EE5"
}
}).catch((err)=>console.log(err))
})

btnGrabar.addEventListener("click",()=>{
   
})
