/*mostrar gif despues de recargar la pagina */
// window.addEventListener('DOMContentLoaded',()=>{
 
//   for(var i =1; i <=localStorage.length; i++){
    
//     let imgLocal = document.createElement("img");
//     imgLocal.src = localStorage.getItem(`${i}`);
//     let btnFav = document.createElement("div");
//     let btnExpandir = document.createElement("div");
//     let btnDescargar = document.createElement("div");
//      divMadre = document.createElement("div");
//     let divBtn = document.createElement("div");
//     let divImg = document.createElement("div");
//     let nombreGif = document.createElement("p");
//     let btnMovil = document.createElement("div");
//     let cerrar =document.createElement("div")
    
//      /*atributos y appendchild  mediante una funcion*/
//      crearGifs(btnFav, "fas fa-trash  btn-gif", divBtn);
//      crearGifs(btnExpandir, "fas fa-expand-alt btn-gif", divBtn);
//      crearGifs(btnDescargar, "fas fa-arrow-down btn-gif", divBtn);
//      crearGifs(cerrar, "fas fa-times cerrar-btn", divMadre);
//      crearGifs(nombreGif, "nombre-gif", divImg);
//      crearGifs(divBtn, "contenedor-botones", divMadre);
//      crearGifs(btnMovil, "btn-movil", divMadre);
//      crearGifs(imgLocal,"gifs-favorito",divMadre);
//      crearGifs(divImg, "div-img", divMadre);
//     crearGifs(divMadre, "tamano-gif", contenedorDeFavoritos);


//     expandirContraer(btnMovil,imgLocal,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifExpandido","gifsTrending","tamano-gif-expandido","tamano-gif","div-img-expan","div-img","contenedor-botones-expandido","contenedor-botones","11","block","hidden");
//     expandirContraer(btnExpandir,imgLocal,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifExpandido","gifsTrending","tamano-gif-expandido","tamano-gif","div-img-expan","div-img","contenedor-botones-expandido","contenedor-botones","11","block","hidden");
//     expandirContraer(cerrar,imgLocal,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifsTrending","gifExpandido","tamano-gif","tamano-gif-expandido","div-img","div-img-expand","contenedor-botones","contenedor-botones-expandido","0","none","visible");
    
//     btnFav.addEventListener("click",()=>{
      
//       for(i = localStorage.length;i>=0;i--){
//           /*que pija hago */
//     }
//     localStorage.removeItem(`${i}`);  
//           contenedorDeFavoritos.removeChild(divMadre);
  
// })

//     descarga(btnDescargar,imgLocal,nombreGif);
//   }

// })


/*funcion para expandir */

function expandirContraer(elemento,gif,madre,img,btn,cerrar,expandir,add1,remove1,add2,remove2,add3,remove3,add4,remove4,style1,style2,style3){
    elemento.addEventListener("click",()=>{
    gif.classList.add(add1);
    gif.classList.remove(remove1);
    madre.classList.add(add2);
    madre.classList.remove(remove2);
    img.classList.add(add3);
    img.classList.remove(remove3);
    btn.classList.add(add4);
    btn.classList.remove(remove4);
    madre.style.zIndex=style1;
    cerrar.style.display=style2;
    expandir.style.visibility=style3;

  })
}
 

/*funcion para crear el gif llamado desde la api con todos sus objetos */
function crearGifs(elemento,atributo,padre){
    elemento.setAttribute("class",atributo);
    padre.appendChild(elemento);
}
/* */
function descarga(btn,img,title){
  
   btn.addEventListener("click",async function(){
     let a = document.createElement("a");
     let response = await fetch(img.src);
     let gif = await response.blob();
     a.download = title.textContent;
     a.href = window.URL.createObjectURL(gif);
     a.dataset.downloadurl =[
       "application/octet-stream",
       a.download,
       a.href
     ].join(":");
     a.click();
   })
  }
