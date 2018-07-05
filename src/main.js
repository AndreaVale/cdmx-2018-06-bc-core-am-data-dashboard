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

//Alumnas
const container = document.getElementById('result');

renderInfo = (alumnas) => {
  document.getElementById('generacionesLima').addEventListener('click',(event) => {
    let result = '';
    console.log(alumnas.length);

    for (let i = 0; i < alumnas.length; i++) {

      result += `<div class="card">
                   <p>Nombre: ${alumnas[i].nombre}</p>
                   <p>Correo: ${alumnas[i].correo}</p>
                   <p>Turno: ${alumnas[i].turno}</p>
                   <p>Progreso: ${alumnas[i].progreso.porcentajeCompletado}</p>
                 </div>`
    }
    container.innerHTML = result;
  });
}
