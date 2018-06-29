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
    document.getElementById('generacion-uno-lima').innerHTML = Object.keys(data);
    console.log(Object.keys(data));
  }).catch((error) => {
  console.log(error);
})
