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
