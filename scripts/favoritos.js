let btnFavorito = document.getElementById("btn-favorito");
let contenedorVacio = document.getElementById("sinContenido");
let contenedorDeFavoritos = document.getElementById("contenedorFavoritos");




/*guardar y eliminar el gif de local storage  */
function asignarFav(elemento,storage,name){
  let like= name;
  let gifimg;
  elemento.addEventListener("click",()=>{
   
    if(like == name){
     
      localStorage.setItem(name,storage); 
       gifimg  = document.createElement("img");
        gifimg.src=localStorage.getItem(name);
        crearGifs(gifimg,"gifs-favorito",contenedorDeFavoritos);
      
        like = false
 
     }else if(like == false ){
      localStorage.removeItem(name)
     like = name;
     contenedorDeFavoritos.removeChild(gifimg);
   }
  });
}

  /*saber si hay gifs en favoritos */
 

