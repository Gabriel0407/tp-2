/*funcion para expandir */

function expandirContraer(elemento,gif,madre,img,btn,cerrar,expandir,add1,remove2,add2,remove2,add3,remove3,add4,remove4,style1,style2,style3){
    elemento.addEventListener("click",()=>{
    gif.classList.add(add1);
    gif.classList.remove(remove2);
    madre.classList.add(add2);
    madre.classList.remove(remove2);
    img.classList.add(add3);
    img.classList.remove(remove3);
    btn.classList.add(add4);
    btn.classList.remove(remove4);
    madre.style.zIndex=style1;
    cerrar.style.display=style2;
    expandir.style.visibility=style3;

  })
}
 
/*funcion para crear el gif llamado desde la api con todos sus objetos */
function crearGifs(elemento,atributo,padre){
    elemento.setAttribute("class",atributo);
    padre.appendChild(elemento);
}
/* */

  
    
const descargarMiGifo = async (gif) => {
	let blob = await fetch(
		`https://media.giphy.com/media/${gif}/giphy.gif`
	).then((img) => img.blob());
	invokeSaveAsDialog(blob, 'My-Gif.gif');
};
    function descargar(btn,url){
      btn.addEventListener("click",()=>{
       descargarMiGifo(url)
      })
    }




