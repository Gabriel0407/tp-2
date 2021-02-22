const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const carrusel = document.getElementById("carrusel");
const carruselTrending = document.getElementById("carrusel-trending");

let direction;

function overOut(elemento,evento){
    if (evento == "mouseover") {
        elemento.addEventListener(evento,()=>{
               elemento.classList.add("efecto-flechas");
           });
    }else if (evento == "mouseout") {
       elemento.addEventListener(evento,()=>{
           elemento.classList.remove("efecto-flechas");
       });
    }
}
overOut(anterior,"mouseover");
overOut(anterior,"mouseout");
overOut(siguiente,"mouseout");
overOut(siguiente,"mouseover");

/*carrusel*/
/*flechas*/
siguiente.addEventListener("click",()=>{
    carrusel.scrollLeft +=400;

})

anterior.addEventListener("click",()=>{
    carrusel.scrollLeft -= 400;
})

/*trae del api */
    let limit =45;
    
 const urlTrending =`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`

    fetch(urlTrending)
    .then(res=> res.json())
    .then(function(json){

        json.data.forEach(function(obj){
            
            const gif = obj.images.fixed_width.url;
            let gifs = document.createElement("img");
            gifs.setAttribute("src", gif);
            gifs.setAttribute("class", "gifs", "id", "gifsOver");
            let btnFav = document.createElement("div");
            let btnExpandir = document.createElement("div");
            let btnDescargar = document.createElement("div");
            let divMadre = document.createElement("div");
            let divBtn = document.createElement("div");
            let divImg = document.createElement("div");
            let btnMovil = document.createElement("div");
            let nombreGif = document.createElement("div");
            let cerrar =document.createElement("div")
            cerrar.setAttribute("class","fas fa-times cerrar-btn");
            nombreGif.setAttribute("class","nombre-gif");
            btnMovil.setAttribute("class","btn-movil");
            divImg.setAttribute("class", "div-img");
            divBtn.setAttribute("class", "contenedor-botones");
            divMadre.setAttribute("class", "tamano-gif");
            btnFav.setAttribute("class", "far fa-heart btn-gif");
            btnDescargar.setAttribute("class","fas fa-arrow-down btn-gif");
            btnExpandir.setAttribute("class","fas fa-expand-alt btn-gif");
          
            divBtn.appendChild(btnFav);
            divBtn.appendChild(btnExpandir);
            divBtn.appendChild(btnDescargar);
            divMadre.appendChild(cerrar);
            divMadre.appendChild(nombreGif);
            divMadre.appendChild(divBtn);
            divMadre.appendChild(btnMovil);
            divMadre.appendChild(gifs);
            divMadre.appendChild(divImg);
            carrusel.appendChild(divMadre);
         
    
            function expandirContraer(elemento,add1,remove2,add2,remove2,add3,remove3,add4,remove4,style1,style2,style3){
              elemento.addEventListener("click",()=>{
              gifs.classList.add(add1);
              gifs.classList.remove(remove2);
              divMadre.classList.add(add2);
              divMadre.classList.remove(remove2);
              divImg.classList.add(add3);
              divImg.classList.remove(remove3);
              divBtn.classList.add(add4);
              divBtn.classList.remove(remove4);
              divMadre.style.zIndex=style1;
              cerrar.style.display=style2;
              btnFav.style.visibility=style3;
    
            })
          }
          expandirContraer(btnMovil,"gifExpandido","gifs","tamano-gif-expandido","tamano-gif","div-img-expan","div-img","contenedor-botones-expandido","contenedor-botones","11","block","hidden");
          expandirContraer(btnExpandir,"gifExpandido","gifs","tamano-gif-expandido","tamano-gif","div-img-expan","div-img","contenedor-botones-expandido","contenedor-botones","11","block","hidden");
          expandirContraer(cerrar,"gifs","gifExpandido","tamano-gif","tamano-gif-expandido","div-img","div-img-expand","contenedor-botones","contenedor-botones-expandido","0","none","visible");
        })
    })

