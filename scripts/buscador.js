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

let offset = 0;
let limite = 12;

/*vermas efecto over/out */

verMas.addEventListener("mouseover", () => {
  verMas.classList.add("efecto-vermas");
});
verMas.addEventListener("mouseout", () => {
  verMas.classList.remove("efecto-vermas");
});

/*obtener informacion del API*/
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

function buscarGif(link, limite) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${link}&limit=12&offset=${limite}`;
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      json.data.forEach(function (obj) {
        /*crear los lementos del gif */

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
        contenedor.appendChild(divMadre);
     

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
    });

        
    })

    .catch(function (err) {
      console.log(err);
    });

  btnVerMas.style.display = "block";
  linea.style.display = "block";

  /*titulo de lo buscado */

  h2Resultado.textContent = input.value;
}

/* sugerencia*/

function togleBuscador(elemento, remove, add, visibilidad) {
  elemento.addEventListener("click", () => {
    btnIcon.classList.remove(remove);
    btnIcon.classList.add(add);
    btnBuscador.style.display = visibilidad;
  });
}

togleBuscador(input, "fa-search", "fa-times", "block");
togleBuscador(btnBuscadorDerecha, "fa-times", "fa-search", "none");

/*trending*/

const urlTopics = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}&limit=5&offset=5`;
fetch(urlTopics)
  .then((res) => res.json())
  .then((res2) => {
    let res3 = res2.data;
    for (let i = 0; i <= 4; i++) {
      let pTopicos = document.createElement("p");
      pTopicos.setAttribute("class", "p-topicos","id", `p-topicos${i}`);
      pTopicos.textContent = res3[i];
      topicos.appendChild(pTopicos);
    }

  })
  .catch(function (err) {
    console.log(err.message);
  });

/*ver mas  */
