let btnFavorito = document.getElementById("btn-favorito");
let contenedorVacio = document.getElementById("sinContenido");
let contenedorDeFavoritos = document.getElementById("contenedorFavoritos");
let like= false;




/*mandar a fav  */
function asignarEvento(elemento,name,storage){
  elemento.addEventListener("click",()=>{
    if(like == false){
      localStorage.setItem(name,storage); 
      let gifimg = document.createElement("img");
      gifimg.src=localStorage.getItem(name);
      crearGifs(gifimg,"gifs-favorito",contenedorDeFavoritos);
      like = true;
      

      
     }else if(like == true){
      localStorage.removeItem(name)
     like = false;
     contenedorDeFavoritos.remove(gifimg);
   }
  

  });
  }

  /*saber si hay gifs en favoritos */
  