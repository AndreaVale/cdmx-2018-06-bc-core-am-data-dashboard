window.computeStudentsStats = (laboratoria) => {
}
window.computeGenerationsStats = (laboratoria) => {
};
window.sortStudents = (laboratoria) => {
};
window.filterStudents = (laboratoria) => {
};

const laboratoriaAPI = 'https://api.myjson.com/bins/b18p2'

fetch(laboratoriaAPI).then((res) => {
      return res.json();
    }).then((data) => {
      //Imprime Sedes
      document.getElementById('sede-lima').innerHTML = Object.keys(data)[0];
      document.getElementById('sede-mex').innerHTML = Object.keys(data)[1];
      document.getElementById('sede-snt').innerHTML = Object.keys(data)[2];
      //Imprime generaciones lima
      pintaGeneracionesLima(Object.keys(data.lima.generacion));
      //Imprime generaciones mex
      pintaGeneracionesMex(Object.keys(data.mexico.generacion));
      //Imprime generaciones santiago
      pintaGeneracionesSnt(Object.keys(data.santiago.generacion));
      //Imprime alumnas
      renderInfo(data.lima.generacion.cuarta.estudiantes);
    }).catch((error) => {
    console.log(error);
  })
