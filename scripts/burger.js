const btnBurger = document.getElementById("burger");
const burgerIcon = document.getElementById("burger-icon");
const menuBurger = document.getElementById("menuBurger");
const modoND = document.getElementById("modo-noc-di");
const favoritos = document.getElementById("favoritos-li");
const misGifos = document.getElementById("mis-gifos");
const crearGif = document.getElementById("btn-crear-gif");
const body= document.getElementById("body");
const logoHome = document.getElementById("logo");
const sectionBuscador = document.getElementById("buscador");
const sectionFav = document.getElementById("favoritos");
const sectionGifos = document.getElementById("mis-gifos-sec");
const sectionCrear = document.getElementById("crear-gifs");
let cuerpo ="dia";
let over = "no";


/*modo noche*/
modoND.addEventListener("click",()=>{
   body.classList.toggle('dark');
   if(cuerpo =="dia"){
      modoND.textContent ="MODO DIURNO";
      logoHome.src ="assets/Logo-modo-noc.svg";
      crearGif.src = "assets/CTA-crear-gifo-modo-noc.svg";
      modoND.classList.remove("click");
      cuerpo ="noche";
   }else if(cuerpo =="noche"){
      modoND.textContent ="MODO NOCTURNO";
      logoHome.src ="assets/logo-desktop.svg";
      crearGif.src = "assets/button-crear-gifo.svg";
      modoND.classList.remove("click");
     cuerpo= "dia";
   }
});
/* menu burger evento */
btnBurger.addEventListener("click", ()=>{
   burgerIcon.classList.toggle("fa-bars");
  burgerIcon.classList.toggle("fa-times");
  menuBurger.classList.toggle("cerrado");
  menuBurger.classList.toggle("abierto");
 });

 /*efectos del menu over y out */

 function agregar_evento(elemento,evento){
   if (evento == "mouseover") {
       elemento.addEventListener(evento,()=>{
              elemento.classList.add("efecto");
          });
   }else if (evento == "mouseout") {
      elemento.addEventListener(evento,()=>{
          elemento.classList.remove("efecto");
      });
   }
}
agregar_evento(modoND,"mouseover");
agregar_evento(modoND,"mouseout");
agregar_evento(favoritos,"mouseover");
agregar_evento(favoritos,"mouseout");
agregar_evento(misGifos,"mouseover");
agregar_evento(misGifos,"mouseout");

crearGif.addEventListener("mouseover",()=>{
   if(over == "no"){
   crearGif.src ="./assets/CTA-crear-gifo-hover.svg";      
   }
  });
 
  crearGif.addEventListener("mouseout",()=>{
   if(over == "no"){
   crearGif.src ="./assets/button-crear-gifo.svg";  
   }    
   });

  /*efecto con el mousedown*/



  function mousedown(elemento,funcion,obj1,obj2){
   elemento.addEventListener(funcion,()=>{
      elemento.classList.add("click");
      elemento.classList.remove("efecto");
      obj1.classList.remove("click");
      obj2.classList.remove("click");

      over= "no"
      crearGif.src ="./assets/button-crear-gifo.svg";
   })
}

mousedown(misGifos,"mousedown",modoND,favoritos);
mousedown(favoritos,"mousedown",modoND,misGifos);
mousedown(modoND,"mousedown",favoritos,misGifos);

  crearGif.addEventListener("mousedown",()=>{

   crearGif.src ="./assets/CTA-crear-gifo-active.svg";      
      over= "yes";
      misGifos.classList.remove("click");
      favoritos.classList.remove("click");
      modoND.classList.remove("click");
  });
  logoHome.addEventListener("mousedown",()=>{
   modoND.classList.remove("click");
     misGifos.classList.remove("click");
     crearGif.src ="./assets/button-crear-gifo.svg";
     favoritos.classList.remove("click");
     over="no";
  });



  /* accion para pasar de seccion a seccion */
  

function click(elemento,funcion,obj1,obj2,obj3,obj4){

   elemento.addEventListener(funcion,()=>{
      obj1.style.display ="block";
      obj2.style.display="none";
      obj3.style.display="none";
      obj4.style.display="none";
   
     
   })
}
click(logoHome,"click",sectionBuscador,sectionFav,sectionGifos,sectionCrear);
click(favoritos,"click",sectionFav,sectionBuscador,sectionGifos,sectionCrear);
click(misGifos,"click",sectionGifos,sectionBuscador,sectionFav,sectionCrear);
click(crearGif,"click",sectionCrear,sectionBuscador,sectionFav,sectionGifos);
