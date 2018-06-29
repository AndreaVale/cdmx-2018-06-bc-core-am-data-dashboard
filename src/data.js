window.computeStudentsStats = {
};
window.computeGenerationsStats = {
};
window.sortStudents = {
};
window.filterStudents = {
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
    document.getElementById('generacion-uno-lima').innerHTML = Object.keys(data.lima.generacion)[2];
    document.getElementById('generacion-dos-lima').innerHTML = Object.keys(data.lima.generacion)[0];
    document.getElementById('generacion-tres-lima').innerHTML = Object.keys(data.lima.generacion)[1];
    //Imprime generaciones mex
    document.getElementById('generacion-uno-mex').innerHTML = Object.keys(data.mexico.generacion)[2];
    document.getElementById('generacion-dos-mex').innerHTML = Object.keys(data.mexico.generacion)[0];
    document.getElementById('generacion-tres-mex').innerHTML = Object.keys(data.mexico.generacion)[1];
    //Imprime generaciones santiago
    document.getElementById('generacion-uno-stg').innerHTML = Object.keys(data.santiago.generacion)[2];
    document.getElementById('generacion-dos-stg').innerHTML = Object.keys(data.santiago.generacion)[0];
    document.getElementById('generacion-tres-stg').innerHTML = Object.keys(data.santiago.generacion)[1];
    //Aqui se imprimirian las alumnas
    document.getElementById('alumnas').
  }).catch((error) => {
  console.log(error);
})
