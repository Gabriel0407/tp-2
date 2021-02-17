const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const carrusel = document.getElementById("carrusel");
var scrollperclick;
var imagePadding =20;

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


    let limit =45;
    
 const urlTrending =`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`

    fetch(urlTrending)
    .then(res=> res.json())
    .then(function(json){

        json.data.forEach(function(obj){
            console.log(obj)
            const gifTrending =obj.images.original.url;
            let gifsTrending = document.createElement("img");
            gifsTrending.setAttribute("src",gifTrending);
            gifsTrending.setAttribute("class","gif-carrusel");
            carrusel.appendChild(gifsTrending);
        })
    })
