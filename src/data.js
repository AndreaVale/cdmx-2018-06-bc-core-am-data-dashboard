window.getData = async () => {
  const url = 'https://raw.githubusercontent.com/AndreaVale/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
  const promiseData = await fetch(url);
  laboratoria = await promiseData.json();
}
window.data = {
computeStudentsStats: () => {

},
computeGenerationsStats: () =>  {

},
sortStudents: () => {

},
filterStudents: () => {

},
};

//const objetoLima = {
  //generacion:"tercera, cuarta, quinta"
  //}
//const objetoMex = {
  //generacion:"tercera, cuarta, quinta",
//}
//const objetoSant = {
  //generacion:"tercera, cuarta, quinta",
//}

//const objetoSedes = [objetoLima,objetoMex,objetoSant];

//window.generaciones = {
 //generation: () => {
    //for (var i = 0; i < objetoSedes.length; i++) {
      //return objetoSedes[i].generacion
    //}
  //}
//};
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
