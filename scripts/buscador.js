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
   
});
verMas.addEventListener("mouseout",()=>{
    verMas.classList.remove("efecto-vermas");
})

/*obtener informacion del API*/
/*evento al buscar*/
  searchForm.addEventListener('submit', function(e){
        e.preventDefault()
        let valor = input.value;

        let  offset = 0;
        buscarGif(valor,offset);
       
    });

/* btn ver mas*/
    verMas.addEventListener("click", (e)=>{
        e.preventDefault()
        offset+=12;
        let valor = input.value;
       
        buscarGif(valor,offset)
        
    })




 function buscarGif(link,limite){
    const url =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${link}&limit=12&offset=${limite}`;
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        

        json.data.forEach(function(obj){
            /*crear los lementos del gif */
            
            const gif =obj.images.fixed_width.url;
            let gifs = document.createElement("img");
            gifs.setAttribute("src",gif);
            gifs.setAttribute("class","gifs","id","gifsOver");
            let btnFav =document.createElement("div");
            let btnExpandir = document.createElement("div");
            let btnDescargar = document.createElement("div");
            let divMadre = document.createElement("div");
            let divBtn = document.createElement("div");
            let divImg = document.createElement("div");
            divImg.setAttribute("class","div-img",);
            divBtn.setAttribute("class","contenedor-botones");
            divMadre.setAttribute("class","tamano-gif","id","tamano-gif");
            btnFav.setAttribute("class","far fa-heart btn-gif","id","btn-fav");
            btnDescargar.setAttribute("class","fas fa-arrow-down btn-gif","id","btn-descargar");
            btnExpandir.setAttribute("class","fas fa-expand-alt btn-gif","id","btn-exp");
            divBtn.appendChild(btnFav);
            divBtn.appendChild(btnExpandir);
            divBtn.appendChild(btnDescargar);
            divMadre.appendChild(divBtn);
            divMadre.appendChild(gifs);
            divMadre.appendChild(divImg);
            contenedor.appendChild(divMadre);
                /*EVENTO OVER    */
            divMadre.addEventListener("mouseover",()=>{
               divBtn.style.display="block";
               divImg.style.display="block"; 

              })
              divMadre.addEventListener("mouseout",()=>{
                divBtn.style.display="none";
                divImg.style.display="none"; 
 
               })
        })
      
        
        
         
          
    })
    .catch(function(err){
        console.log(err);
    })
    
    btnVerMas.style.display="block";
    linea.style.display="block";

    /*titulo de lo buscado */
    
    h2Resultado.textContent=input.value;

}




/* sugerencia*/

function togleBuscador(elemento,remove,add,visibilidad){
    elemento.addEventListener("click",()=>{
   
        btnIcon.classList.remove(remove);
        btnIcon.classList.add(add);
        btnBuscador.style.display=visibilidad;
  
    })
}

togleBuscador(input,"fa-search","fa-times","block");
togleBuscador(btnBuscadorDerecha,"fa-times","fa-search","none");


/*trending*/

const urlTopics = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}&limit=5&offset=5`;
fetch(urlTopics)
.then(res=> res.json())
.then(res2 =>{

    let res3 = res2.data;
    for(let i = 0;i<=4;i++){
      
        let pTopicos = document.createElement("p");
        pTopicos.setAttribute("class","p-topicos");
        pTopicos.setAttribute("id",`p-topicos${i}`);
        pTopicos.textContent =res3[i];
        topicos.appendChild(pTopicos);
    }
    

})
.catch(function(err){
    console.log(err.message);
})

/*ver mas  */
    
      
     