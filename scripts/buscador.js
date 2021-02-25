const verMas = document.getElementById("btn-ver-mas");
const btnBuscador = document.getElementById("btn-buscar");
const btnIcon = document.getElementById("btn-icon");
const btnBuscadorDerecha = document.getElementById("btn-buscar-derecha");
const input = document.getElementById("input-buscador");
const sugerencia = document.getElementById("sugerencia");
const topicos = document.getElementById("trending-topics");
const h2Resultado = document.getElementById("titulo-resultado");
const linea = document.getElementById("linea");
const contenedor = document.getElementById("contenedor-gifs");
const btnVerMas = document.getElementById("btn-ver-mas");
const searchForm = document.getElementById("form-buscador");
const apiKey = "JTTuSKhX493w24cTE17cNArghwaQot2D";
let abierto = false;
let offset = 0;
let limite = 12;

/*vermas efecto over/out */

verMas.addEventListener("mouseover", () => {
  verMas.classList.add("efecto-vermas");
});
verMas.addEventListener("mouseout", () => {
  verMas.classList.remove("efecto-vermas");
});


/*funcion vaciar el input y el contenedor de gifs */
   


function togleBuscador(elemento, remove, add, visibilidad) {
  elemento.addEventListener("click", () => {
    btnIcon.classList.remove(remove);
    btnIcon.classList.add(add);
    btnBuscador.style.display = visibilidad;
    if (elemento == input && abierto == false) {
      abierto = true;
    } else if (elemento == btnBuscadorDerecha && abierto == true) {
      console.log("click");
      input.value = "";
      abierto = false;
    }
  });
}

togleBuscador(input, "fa-search", "fa-times", "block");
togleBuscador(btnBuscadorDerecha, "fa-times", "fa-search", "none");

/*evento al buscar*/
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let valor = input.value;

  let offset = 0;
  buscarGif(valor, offset);
});

/* btn ver mas*/
verMas.addEventListener("click", (e) => {
  e.preventDefault();
  offset += 12;
  let valor = input.value;

  buscarGif(valor, offset);
});

/*llamar a la api y crear mediante dom el gif y sus atributos */
function buscarGif(link, limite) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${link}&limit=12&offset=${limite}`;
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      json.data.forEach(function (obj) {
        /*crear los lementos del gif */


        const gifNombre = obj.title;
        
       
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
        let nombreGif = document.createElement("p");
        nombreGif.textContent=gifNombre;
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
         divMadre.appendChild(gifs);
         crearGifs(divImg, "div-img", divMadre);
         
         crearGifs(divMadre, "tamano-gif", contenedor);
    
      /*evento favorito con local storage */
           asignarEvento(btnFav,gifNombre,gif);

     /*funcion para expandir y cerrar el gif */

     expandirContraer(btnMovil,gifs,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifExpandido","gifsTrending","tamano-gif-expandido","tamano-gif","div-img-expan","div-img","contenedor-botones-expandido","contenedor-botones","11","block","hidden");
     expandirContraer(btnExpandir,gifs,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifExpandido","gifsTrending","tamano-gif-expandido","tamano-gif","div-img-expan","div-img","contenedor-botones-expandido","contenedor-botones","11","block","hidden");
     expandirContraer(cerrar,gifs,divMadre,divImg,divBtn,cerrar,btnExpandir,"gifsTrending","gifExpandido","tamano-gif","tamano-gif-expandido","div-img","div-img-expand","contenedor-botones","contenedor-botones-expandido","0","none","visible");
  
     /*evento para borrar el contenido del input*/
      if(abierto == true){
      btnBuscadorDerecha.addEventListener("click",()=>{
     
      contenedor.removeChild(divMadre);
       btnVerMas.style.display="none";
       linea.style.display = "none";
       h2Resultado.style.display ="none";
      
      })
    }
     input.addEventListener("keyup", (event) => {
       if (event.keycode == 8 || event.which === 8) {
         if (abierto == true) {
           input.value = "";
           contenedor.removeChild(divMadre);
           btnVerMas.style.display = "none";
           linea.style.display = "none";
           h2Resultado.style.display = "none";
         }
       }
     });
     
    

    });


    /*evento de  */


    })

    .catch(function (err) {
      console.log(err);
    });

    

  btnVerMas.style.display = "block";
  linea.style.display = "block";

  /*titulo de lo buscado */
  h2Resultado.style.display ="block";
  h2Resultado.textContent = input.value;
}


/*trending*/

const urlTopics = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}&limit=5&offset=5`;
fetch(urlTopics)
  .then((res) => res.json())
  .then((res2) => {
    let res3 = res2.data;
    for (let i = 0; i <= 4; i++) {
      let pTopicos = document.createElement("p");
      pTopicos.setAttribute("class", "p-topicos", "id", `p-topicos${i}`);
      pTopicos.textContent = res3[i];
      topicos.appendChild(pTopicos);

    }
  })
  .catch(function (err) {
    console.log(err.message);
  });

  



