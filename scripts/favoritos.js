let btnFavorito = document.getElementById("btn-favorito");
let contenedorVacio = document.getElementById("sinContenido");
let contenedorDeFavoritos = document.getElementById("contenedorFavoritos");




/*guardar y eliminar el gif de local storage  */
function asignarFav(elemento,storage,name){
  let like= name;
  let divMadre;
  let btnFav;
  elemento.addEventListener("click",()=>{
   
    if(like == name){
     
      localStorage.setItem(name,storage); 
      let gifimg = document.createElement("img");
        gifimg.src=localStorage.getItem(name);
         btnFav = document.createElement("div");
        let btnExpandir = document.createElement("div");
        let btnDescargar = document.createElement("div");
         divMadre = document.createElement("div");
        let divBtn = document.createElement("div");
        let divImg = document.createElement("div");
        let nombreGif = document.createElement("p");
        let btnMovil = document.createElement("div");
        let cerrar =document.createElement("div")
        
         /*atributos y appendchild  mediante una funcion*/
         crearGifs(btnFav, "far fa-heart btn-gif", divBtn);
         crearGifs(btnExpandir, "fas fa-expand-alt btn-gif", divBtn);
         crearGifs(btnDescargar, "fas fa-arrow-down btn-gif", divBtn);
         crearGifs(cerrar, "fas fa-times cerrar-btn", divMadre);
         crearGifs(nombreGif, "nombre-gif", divImg);
         crearGifs(divBtn, "contenedor-botones", divMadre);
         crearGifs(btnMovil, "btn-movil", divMadre);
         crearGifs(gifimg,"gifs-favorito",divMadre);
         crearGifs(divImg, "div-img", divMadre);
        crearGifs(divMadre, "tamano-gif", contenedorDeFavoritos);


        expandirContraer(btnMovil,gifimg,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifExpandido","gifsTrending","tamano-gif-expandido","tamano-gif","div-img-expan","div-img","contenedor-botones-expandido","contenedor-botones","11","block","hidden");
        expandirContraer(btnExpandir,gifimg,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifExpandido","gifsTrending","tamano-gif-expandido","tamano-gif","div-img-expan","div-img","contenedor-botones-expandido","contenedor-botones","11","block","hidden");
        expandirContraer(cerrar,gifimg,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifsTrending","gifExpandido","tamano-gif","tamano-gif-expandido","div-img","div-img-expand","contenedor-botones","contenedor-botones-expandido","0","none","visible");

       
        like = false
 
     }else if(like == false){
      localStorage.removeItem(name)
     like = name;
     contenedorDeFavoritos.removeChild(divMadre);
   }

   btnFav.addEventListener("click",()=>{
    localStorage.removeItem(name)
    like = name;
    contenedorDeFavoritos.removeChild(divMadre);
   })
  });
}

  /*saber si hay gifs en favoritos */
 

