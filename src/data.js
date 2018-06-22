//este es el array en "formato JSON" lo parse para hacer un objeto a partir de ese json.
var dataSede =JSON.parse('{"Campus":"Lima","GeneracionLima":"Tercera, Cuarta, Quinta","Campus2":"Mexico","GeneracionMex":"Tercera, Cuarta, Quinta","Campus3":"Santiago","GeneracionSan": "Tercera, Cuarta, Quinta"}');
// las funciones muestran el campus y las generaciones respectivas, no se como hacer que salgan verticalmente :(
// de esa forma apareceran escritas en el id=sede, puse sede1 y sede2 para que se viera como ejemplo solo el primero.
function funLima() {
document.getElementById("sedes").innerHTML = dataSede.Campus + ": "+ dataSede.GeneracionLima;
  }
function funMexico(){
  document.getElementById("sedes1").innerHTML= dataSede.Campus2 + ": " + dataSede.GeneracionMex;
}
function funSant(){
  document.getElementById("sedes2").innerHTML = dataSede.Campus3 + ": " + dataSede.GeneracionSan
}
// este don lo vamos a ocupar para jalar el resultado escogido del id=pickASede
document.getElementById("pickASede").value;
// una solucion es dependiendo de la sede que escoja el usuario dar el resultado de las generaciones llamando a la entidad y su atributo ej; entidad: "GeneracionLima"
// atributos "Tercera, Cuarta, Quinta",
//si el resultado del id=pickASede es igual a id=lima ejecutar function=funLima, que te muestra la sede y sus generaciones y asi con cada uno.
