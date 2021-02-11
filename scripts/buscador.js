const verMas =document.getElementById("btn-ver-mas");
const  btnBuscador = document.getElementById("btn-buscar");
const btnIcon = document.getElementById("btn-icon");
const  btnBuscadorDerecha = document.getElementById("btn-buscar-derecha");
const  input = document.getElementById("input-buscador");
const sugerencia = document.getElementById("sugerencia");
const topicos = document.getElementById("trending-topics");
const h2Resultado = document.getElementById("titulo-resultado");
const contenedor = document.getElementById("contenedor-gifs");
const btnVerMas = document.getElementById("btn-ver-mas");
const searchForm = document.getElementById("form-buscador");
const apiKey = "JTTuSKhX493w24cTE17cNArghwaQot2D";
const urlEjemplo="https://api.giphy.com/v1/tags/related/";
let  offset = 0;
 let  limite =12 ;


/*vermas efecto over/out */

verMas.addEventListener("mouseover",()=>{
    verMas.classList.add("efecto-vermas");
    console.log("dea")
});
verMas.addEventListener("mouseout",()=>{
    verMas.classList.remove("efecto-vermas");
})

/*obtener informacion del API*/
  searchForm.addEventListener('submit', function(e){
        e.preventDefault()
        let valor = input.value;
        buscarGif(valor);
       
    });


function buscarGif(valor){
    const url =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${valor}&limit=12&offset=${offset}`;
  

    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        let resultados = "";

        json.data.forEach(function(obj){
            console.log(obj);
            const gif =obj.images.fixed_width.url;

            resultados +=`<img src="${gif}"
            class="tamano-gif">`;
        })
        contenedor.innerHTML = resultados;
        btnVerMas.style.display="block";
        
    })
    .catch(function(err){
        console.log(err.message);
    })

}


/*buscar resultado celular */
/*ver mas  */
    verMas.addEventListener("click", (e)=>{
       e.preventDefault();
       offset+=12;
       limite +=12;
       let valor = input.value;
       const url =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${valor}&limit=${limite}&offset=${offset}`;
       fetch(url)
       .then(res => res.json())
       .then(res2 => {
        
        
        let resultados = "";

        res2.data.forEach(function(obj){
            console.log(obj);
            const gif =obj.images.fixed_width.url;

            resultados +=`<img src="${gif}"
            class="tamano-gif">`;
        })
        contenedor.innerHTML = resultados;
        btnVerMas.style.display="block";
        
        
       })
       
    })
/*
aparecer sugerencias cuando hago click en el form 

input.addEventListener("keyup",()=>{
 
    
    let valorLetra =input.value;
   
    if(valorLetra.lenght >=1){
        sugerencia();
        fetch(`${urlEjemplo}${valorLetra}?api_key=${apiKey}`)
        .then((res)=> res.json())
        .then((res2)=>  sugerencia(res2))
        .catch((err)=>{ console.log(err.message)});
    }else{
        sugerenciaInputOculto();
    }
})

    

sugerencia mostrar

function sugerenciasInput(){
sugerencia.style.display ="block";
btnIcon.classList.remove("fa-search");
btnIcon.classList.add("fa-times");
btnBuscador.style.display="block";
}
sugerencia ocultar 

function sugerenciaInputOculto(){
    sugerencia.style.display="none";
    btnIcon.classList.add("fa-search");
   btnIcon.classList.remove("fa-times");
    btnBuscador.style.display="none";
}
contenido de  sugerencia 

function sugerencias(suge){
    let sugerir= suge.data;
    sugerencia.innerHTML=`
    <li class="sugerir"> <i class="fas fa-search"></i> <p class="p-sugerir">${sugerir[0].name}</p></li>
    <li class="sugerir"> <i class="fas fa-search"></i> <p class="p-sugerir">${sugerir[1].name}</p></li>
    <li class="sugerir"> <i class="fas fa-search"></i> <p class="p-sugerir">${sugerir[2].name}</p></li>
    <li class="sugerir"> <i class="fas fa-search"></i> <p class="p-sugerir">${sugerir[3].name}</p></li>`
}
*/