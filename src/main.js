//document.getElementById('lima').innerHTML = objetoSedes[i].generacion
lima.addEventListener("click",event => {
  let impresion = document.getElementById("generacionlima");
  impresion.innerHTML = window.generaciones.generation();
}
)
