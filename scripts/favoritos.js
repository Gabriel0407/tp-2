let btnFavorito = document.getElementById("btn-favorito");
let contenedorVacio = document.getElementById("sinContenido");
let contenedorDeFavoritos = document.getElementById("contenedorFavoritos");

let vacio = true;


let i = 0;

/*guardar y eliminar el gif de local storage  */
// function asignarFav(elemento,storage,name){
//   let like= name;
//   let divMadre;
//   let btnFav;
 
//   elemento.addEventListener("click",()=>{
   
//     if(like == name ){
//       /*la i es para poner un nombre numerico y ordenado a los gifs(key) */
//       if(localStorage.length >= i){
     
//         i++
//        }
//       let gif = storage;
//       localStorage.setItem(`${i}`,gif); 
      
//       let gifimg = document.createElement("img");
//         gifimg.src=localStorage.getItem(`${i}`);
//          btnFav = document.createElement("div");
//         let btnExpandir = document.createElement("div");
//         let btnDescargar = document.createElement("div");
//          divMadre = document.createElement("div");
//         let divBtn = document.createElement("div");
//         let divImg = document.createElement("div");
//         let nombreGif = document.createElement("p");
//         let btnMovil = document.createElement("div");
//         let cerrar =document.createElement("div")
        
//          /*atributos y appendchild  mediante una funcion*/
//          crearGifs(btnFav, "fas fa-trash btn-gif", divBtn);
//          crearGifs(btnExpandir, "fas fa-expand-alt btn-gif", divBtn);
//          crearGifs(btnDescargar, "fas fa-arrow-down btn-gif", divBtn);
//          crearGifs(cerrar, "fas fa-times cerrar-btn", divMadre);
//          crearGifs(nombreGif, "nombre-gif", divImg);
//          crearGifs(divBtn, "contenedor-botones", divMadre);
//          crearGifs(btnMovil, "btn-movil", divMadre);
//          crearGifs(gifimg,"gifs-favorito",divMadre);
//          crearGifs(divImg, "div-img", divMadre);
//         crearGifs(divMadre, "tamano-gif", contenedorDeFavoritos);


//         expandirContraer(btnMovil,gifimg,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifExpandido","gifsTrending","tamano-gif-expandido","tamano-gif","div-img-expan","div-img","contenedor-botones-expandido","contenedor-botones","11","block","hidden");
//         expandirContraer(btnExpandir,gifimg,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifExpandido","gifsTrending","tamano-gif-expandido","tamano-gif","div-img-expan","div-img","contenedor-botones-expandido","contenedor-botones","11","block","hidden");
//         expandirContraer(cerrar,gifimg,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifsTrending","gifExpandido","tamano-gif","tamano-gif-expandido","div-img","div-img-expand","contenedor-botones","contenedor-botones-expandido","0","none","visible");

//         descarga(btnDescargar,gifimg,nombreGif)
//         like = false
//         vacio = false;

        
//           contenedorVacio.style.display= "none"
        
      
//      }else if(like == false){
//       localStorage.removeItem(`${i}`)
//      like = name;
//      contenedorDeFavoritos.removeChild(divMadre);
    
//    }

//    btnFav.addEventListener("click",()=>{
//     localStorage.removeItem(`${i}`)
//     like = name;
    
//     contenedorDeFavoritos.removeChild(divMadre);
//     if(localStorage.length == 0 ){
//   contenedorVacio.style.display= "block"

// }

//    })
//    if(localStorage.length == 0 ){
//     contenedorVacio.style.display= "block"
  
//   }
//   });
 
// }







  /*saber si hay gifs en favoritos */
  let arrFav =[];
  // if(arrFav.length === 0 ){
  //   contenedorVacio.style.display= "block"
  
  // }
  function asignarFav(elemento,storage,name){
    
    elemento.addEventListener("click",()=>{
      
let objGif ={
    title: name,
    gif: storage
    }
    arrFav.push(objGif);

    localStorage.setItem("gif",JSON.stringify(arrFav));
    asignarFavs()
  
  })

 }
 
 function asignarFavs(){
  
  contenedorDeFavoritos.innerHTML = '';
 arrFav = JSON.parse(localStorage.getItem("gif"));
 if(arrFav == null) {
   arrFav = [];
 }else{
   for(i = 0; i< arrFav.length;i++){


           let gifimg = document.createElement('img');
               gifimg.src = `${arrFav[i].gif}`;
        let btnFav = document.createElement("div");
        let btnExpandir = document.createElement("div");
        let btnDescargar = document.createElement("div");
         divMadre = document.createElement("div");
        let divBtn = document.createElement("div");
        let divImg = document.createElement("div");
        let nombreGif = document.createElement("p");
        nombreGif.textContent= `${arrFav[i].title}`
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

        descarga(btnDescargar,gifimg,nombreGif)
        
   }


 }

}
