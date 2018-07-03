const pintaGeneracionesLima = (generacion) => {

  const containerCampus = document.getElementById('generacionesLima');

  generacion.forEach((sede) => {
  const option = document.createElement('label');
  option.innerHTML = sede + ' generacion';
  containerCampus.appendChild(option);
});
}

const pintaGeneracionesMex = (generacion) => {

  const containerCampus = document.getElementById('generacionesMex');

  generacion.forEach((sede) => {
  const option = document.createElement('label');
  option.innerHTML = sede + ' generacion';
  containerCampus.appendChild(option);
});
}

const pintaGeneracionesSnt = (generacion) => {

  const containerCampus = document.getElementById('generacionesSnt');

  generacion.forEach((sede) => {
  const option = document.createElement('label');
  option.innerHTML = sede + ' generacion';
  containerCampus.appendChild(option);
});
}
//estudiantes DE LIMA
const pintaEstudiantesLimaT = (estudiantes) => {

  const containerEstudiantes = document.getElementById('alumnasTercera');

  estudiantes.forEach((generacion) => {
  const option = document.createElement('label');
  option.innerHTML = "---------- " + generacion ;
  containerEstudiantes.appendChild(option);
});
}
const pintaEstudiantesLimaC = (estudiantes) => {

  const containerEstudiantes = document.getElementById('alumnasCuarta');

  estudiantes.forEach((generacion) => {
  const option = document.createElement('label');
  option.innerHTML = "---------- " + generacion ;
  containerEstudiantes.appendChild(option);
});
}
const pintaEstudiantesLimaQ = (estudiantes) => {

  const containerEstudiantes = document.getElementById('alumnasQuinta');

  estudiantes.forEach((generacion) => {
  const option = document.createElement('label');
  option.innerHTML = "---------- " + generacion ;
  containerEstudiantes.appendChild(option);
});
}
//Estudiantes de mexico
const pintaEstudiantesMexT = (estudiantes) => {

  const containerEstudiantes = document.getElementById('alumnasTercera');

  estudiantes.forEach((generacion) => {
  const option = document.createElement('label');
  option.innerHTML = "---------- " + generacion ;
  containerEstudiantes.appendChild(option);
});
}
const pintaEstudiantesMexC = (estudiantes) => {

  const containerEstudiantes = document.getElementById('alumnasCuarta');

  estudiantes.forEach((generacion) => {
  const option = document.createElement('label');
  option.innerHTML = "---------- " + generacion ;
  containerEstudiantes.appendChild(option);
});
}
const pintaEstudiantesMexQ = (estudiantes) => {

  const containerEstudiantes = document.getElementById('alumnasQuinta');

  estudiantes.forEach((generacion) => {
  const option = document.createElement('label');
  option.innerHTML = "---------- " + generacion ;
  containerEstudiantes.appendChild(option);
});
}
//Estudiantes DE santiago
const pintaEstudiantesSntT = (estudiantes) => {

  const containerEstudiantes = document.getElementById('alumnasTercera');

  estudiantes.forEach((generacion) => {
  const option = document.createElement('label');
  option.innerHTML = "---------- " + generacion ;
  containerEstudiantes.appendChild(option);
});
}
const pintaEstudiantesSntC = (estudiantes) => {

  const containerEstudiantes = document.getElementById('alumnasCuarta');

  estudiantes.forEach((generacion) => {
  const option = document.createElement('label');
  option.innerHTML = "--------- " + generacion ;
  containerEstudiantes.appendChild(option);
});
}
const pintaEstudiantesSntQ = (estudiantes) => {

  const containerEstudiantes = document.getElementById('alumnasQuinta');

  estudiantes.forEach((generacion) => {
  const option = document.createElement('label');
  option.innerHTML = "--------- " + generacion  ;
  containerEstudiantes.appendChild(option);
});
}
