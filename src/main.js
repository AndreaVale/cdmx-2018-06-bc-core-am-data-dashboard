//document.getElementById('lima').innerHTML = objetoSedes[i].generacion
lima.addEventListener("click",event => {
  let impresion = document.getElementById("generacionlima");
  impresion.innerHTML = window.generaciones.generation();
}
)
mex.addEventListener("click",event => {
  let impresion2 = document.getElementById("generacion-mex");
  impresion2.innerHTML = window.generaciones.generation();
}
)

stg.addEventListener("click",event => {
  let impresion3 = document.getElementById("generacion-stg");
  impresion3.innerHTML = window.generaciones.generation();
}
)
