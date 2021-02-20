const verMas =document.getElementById("btn-ver-mas");
const  btnBuscador = document.getElementById("btn-buscar");
const btnIcon = document.getElementById("btn-icon");
const  btnBuscadorDerecha = document.getElementById("btn-buscar-derecha");
const  input = document.getElementById("input-buscador");
const sugerencia = document.getElementById("sugerencia");
const topicos = document.getElementById("trending-topics");
const h2Resultado = document.getElementById("titulo-resultado");
const linea = document.getElementById("linea");
const contenedor = document.getElementById("contenedor-gifs");
const btnVerMas = document.getElementById("btn-ver-mas");
const searchForm = document.getElementById("form-buscador");
const apiKey = "JTTuSKhX493w24cTE17cNArghwaQot2D";

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
    const url =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${valor}&limit=12`;
    

    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        

        json.data.forEach(function(obj){
            /*crear los lementos del gif */
            
            let gifs = document.createElement("img");
            gifs.setAttribute("src",gif);
            gifs.setAttribute("class","tamano-gif");
            contenedor.appendChild(gifs);
        })
      
        btnVerMas.style.display="block";
        linea.style.display="block";

        /*titulo de lo buscado */
        h2Resultado.textContent=input.value;
        
    })
    .catch(function(err){
        console.log(err.message);
    })

}

/* sugerencia*/
input.addEventListener("click",()=>{
   
        btnIcon.classList.remove("fa-search");
        btnIcon.classList.add("fa-times");
        btnBuscador.style.display="block";
  
        
});


btnBuscadorDerecha.addEventListener("click",()=>{
    btnIcon.classList.add("fa-search");
    btnIcon.classList.remove("fa-times");
    btnBuscador.style.display="none";
});


/*funcion para generar los objetos del gif */
function crearEstructuraGif(){
    let pTopicos = document.createElement("p");
        pTopicos.setAttribute("class","p-topicos");
        pTopicos.setAttribute("id",`p-topicos${i}`);
        pTopicos.textContent =res3[i];
        topicos.appendChild(pTopicos);
}
/*trending*/

const urlTopics = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}&limit=5&offset=5`;
fetch(urlTopics)
.then(res=> res.json())
.then(res2 =>{

    let res3 = res2.data;
    for(let i = 0;i<=4;i++){
        console.log(res3[i]);
        crearEstructuraGif();
    }
    

})
.catch(function(err){
    console.log(err.message);
})

/*ver mas  */
    verMas.addEventListener("click", (e)=>{
       e.preventDefault();
       offset+=12;
     
       let valor = input.value;
       const url =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${valor}&limit=${limite}&offset=${offset}`;
       fetch(url)
       .then(res => res.json())
       .then(res2 => {
     

        res2.data.forEach(function(obj){
            console.log(obj);
            const gif =obj.images.fixed_width.url;
            let gifs = document.createElement("img");
            gifs.setAttribute("src",gif);
            gifs.setAttribute("class","tamano-gif");
            contenedor.appendChild(gifs);
        })
        
        
       })
     
    })

  

