window.computeStudentsStats = (laboratoria) => {
};
window.computeGenerationsStats = (laboratoria) => {
};
window.sortStudents = (laboratoria) => {
};
window.filterStudents = (laboratoria) => {
};

const laboratoriaAPI = 'https://api.myjson.com/bins/b18p2';

fetch(laboratoriaAPI).then((res) => {
  return res.json();
}).then((data) => {
  // Imprime Sedes
  document.getElementById('sede-lima').innerHTML = Object.keys(data)[0];
  document.getElementById('sede-mex').innerHTML = Object.keys(data)[1];
  document.getElementById('sede-snt').innerHTML = Object.keys(data)[2];
  // Imprime generaciones lima
  pintaGeneracionesLima(Object.keys(data.lima.generacion));
  // Imprime alumnas lima 4
  alumnasCuartaInfo(data.lima.generacion.cuarta.estudiantes);
  // Imprime alumnas lima 5
  alumnasQuintaInfo(data.lima.generacion.quinta.estudiantes);
  // Imprime alumnas lima 3
  alumnasTerceraInfo(data.lima.generacion.tercera.estudiantes);
  // Imprime generaciones Mexico
  pintaGeneracionesMex(Object.keys(data.mexico.generacion));
  // Imprime alumnas Mexico 4
  alumnasCuartaMex(data.mexico.generacion.cuarta.estudiantes);
  // Imprime alumnas Mexico 5
  alumnasQuintaMex(data.mexico.generacion.quinta.estudiantes);
  // Imprime alumnas Mexico 3
  alumnasTerceraMex(data.mexico.generacion.tercera.estudiantes);
  // Imprime generaciones santiago
  pintaGeneracionesSnt(Object.keys(data.santiago.generacion));
  // Imprime alumnas Santiago 4
  alumnasCuartaSnt(data.santiago.generacion.cuarta.estudiantes);
  // Imprime alumnas Santiago 5
  alumnasQuintaSnt(data.santiago.generacion.quinta.estudiantes);
  // Imprime alumnas Santiago 3
  alumnasTerceraSnt(data.santiago.generacion.tercera.estudiantes);
}).catch((error) => {
  console.log(error);
});
