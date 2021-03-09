const pantallaVideo = document.getElementById("grabacion-video");
const iconoCargando = document.getElementById("icono-cargando");
const pSubirGifo = document.getElementById("p-subir-gifo");
const pText = document.getElementById("p-text");
const h2CrearGif = document.getElementById("h2-crear-gif");
const divGrabar = document.getElementById("grabar");
const infoDiv = document.createElement("info");
const btnsGif = document.getElementById("btns-gif");
const gifGrabado = document.getElementById("gifo-grabado");
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
let recorder ;
let segundos = "00";
let minutos = "00";
let horas = "00";
let tiempo;
let blob;
let form = new FormData();
let arrMisGifos = [];

btnComenzar.addEventListener("click",()=>{
  
    
        h2CrearGif.style.display="none";
        pText.style.display="none"
        btnComenzar.style.display="none";
        h2Permiso.style.display="block";
        permiso.style.display="block";
        habilitado = true;
        paso1.style.background="#572EE5";
        paso1.style.color="#ffffff";
navigator.mediaDevices.getUserMedia({audio:false, video:true})
.then((stream)=>{
    if(habilitado == true){
    console.log(stream);
    pantallaVideo.srcObject = stream;
    pantallaVideo.style.display="block";
    btnGrabar.style.display="block";
    h2Permiso.style.display="none";
        permiso.style.display="none";
        paso2.style.background="#572EE5";
        paso2.style.color="#ffffff";
        paso1.style.background="#ffffff";
        paso1.style.color="#572EE5";
        recorder = RecordRTC(stream, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 360,
                hidden: 240,
                onGifRecordingStarted: function() {
                 console.log('started');
               },
              });     
}
}).catch((err)=>console.log(err))
})
 

btnGrabar.addEventListener("click",()=>{
       recorder.startRecording();
       btnGrabar.style.display="none";
       btnFinalizar.style.display="block";
     contador.style.display="block";
     tiempo = setInterval(time,1000);
     
})

btnFinalizar.addEventListener("click",()=>{
        recorder.stopRecording(() => {
		blob = recorder.getBlob();
		gifGrabado.src = URL.createObjectURL(blob);
                gifGrabado.style.display="block"
                pantallaVideo.style.display="none"
		form.append('file', recorder.getBlob(), 'myGif.gif');
		console.log(form.get('file'));

	});
  
        btnFinalizar.style.display="none";
        contador.style.display="none"
        btnRepetir.style.display="block";
        btnSubir.style.display="block"
         clearInterval(tiempo);
        segundos="00";
        minutos ="00";
        horas ="00";
        contador.innerHTML = `${horas}:${minutos}:${segundos}`;
})

btnRepetir.addEventListener("click",()=>{
        pantallaVideo.style.display="block"
        recorder.clearRecordedData();
        gifGrabado.style.display="none"
        navigator.mediaDevices.getUserMedia({audio:false, video:true})
.then((stream)=>{
    if(habilitado == true){
    console.log(stream);
    pantallaVideo.srcObject = stream;
    pantallaVideo.style.display="block";
    btnGrabar.style.display="block";
    h2Permiso.style.display="none";
        permiso.style.display="none";
        paso2.style.background="#572EE5";
        paso2.style.color="#ffffff";
        paso1.style.background="#ffffff";
        paso1.style.color="#572EE5";
        recorder = RecordRTC(stream, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 360,
                hidden: 240,
                onGifRecordingStarted: function() {
                 console.log('started');
               },
              });     
}
}).catch((err)=>console.log(err))

        btnSubir.style.display="none";
        btnGrabar.style.display="block";
        btnRepetir.style.display="none"
        paso2.style.background="#572EE5";
        paso2.style.color="#ffffff";
        paso3.style.background="#ffffff";
         paso3.style.color="#572EE5";
})

/*subir gif a la plataforma */
btnSubir.addEventListener("click",()=>{
        paso3.style.background="#572EE5";
        paso3.style.color="#ffffff";
        paso2.style.background="#ffffff";
         paso2.style.color="#572EE5";
        info.style.display="flex";
         divGrabar.style.display="block";
        subirGif();
})



async function subirGif(){


await fetch(`https://upload.giphy.com/v1/gifs`,{
        method:'POST',
        body:form,
})
.then((res)=> res.json())
.then((gifoSubido)=>{
     let miGifo = gifoSubido.id;

     arrMisGifos.push(miGifo);
console.log(arrMisGifos);

 let misGifos = localStorage.setItem("misGifos",JSON.stringify(arrMisGifos));
 
})
.catch((err)=>{
        console.log(err);
})


}
function time(){
        segundos++;

        if(segundos < 10){
        segundos="0"+segundos;
        }
        if(segundos>59){
                segundos="00";
                minutos++;
                if(minutos<10){
                        minutos="0"+minutos;
                }
        }
        if(minutos>59){
                minutos="00";
                horas++;
                if(horas <10){
                        horas="0"+horas;
                }
        }

      
        contador.innerHTML = `${horas}:${minutos}:${segundos}`;
}
