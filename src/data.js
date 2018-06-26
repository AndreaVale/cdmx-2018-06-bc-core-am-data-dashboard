const objetoLima = {
  generacion:"tercera, cuarta, quinta"
  }
const objetoMex = {
  generacion:"tercera, cuarta, quinta",
}
const objetoSant = {
  generacion:"tercera, cuarta, quinta",
}

const objetoSedes = [objetoLima,objetoMex,objetoSant];

window.generaciones = {
 generation: () => {
    for (var i = 0; i < objetoSedes.length; i++) {
      return objetoSedes[i].generacion
    }
  }
};
  //const json= () => {
  //let link = "https://api.myjson.com/bins/b18p2";
  //fetch(link).then(function(datos){
    //return datos.json(),
  //}
//};
//fetch('https://api.myjson.com/bins/b18p2').then(function(datos) {
  // Convertir a JSON
  //return datos.json();
//}).then(function(j) {
  // Ahora 'j' es un objeto JSON
    //console.log(j);
    //for(let generation in JSON){
