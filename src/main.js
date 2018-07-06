const pintaGeneracionesLima = (generacion) => {

  const containerCampus = document.getElementById('generacionesLima');

  generacion.forEach((sede) => {
  const option = document.createElement('label');

  option.id = sede + "lima";
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

//Imprime alumnas de Lima Cuarta Generacion
const container = document.getElementById('result');

alumnasCuartaInfo = (alumnas) => {
  document.getElementById('cuartalima').addEventListener('click',(event) => {
    let result = '';
    console.log(alumnas.length);

    for (let i = 0; i < alumnas.length; i++) {

      result += `<div class="card">
                   <p>Nombre: ${alumnas[i].nombre}</p>
                   <p>Correo: ${alumnas[i].correo}</p>
                   <p>Turno: ${alumnas[i].turno}</p>
                   <p>Progreso: ${alumnas[i].progreso.porcentajeCompletado}%</p>
                 </div>`
    }
    container.innerHTML = result;
  });
}
//Imprime alumnas Lima 5 G
const containerDos = document.getElementById('result');

alumnasQuintaInfo = (alumnas) => {
  document.getElementById('quintalima').addEventListener('click',(event) => {
    let result = '';
    console.log(alumnas.length);

    for (let i = 0; i < alumnas.length; i++) {

      result += `<div class="card">
                   <p>Nombre: ${alumnas[i].nombre}</p>
                   <p>Correo: ${alumnas[i].correo}</p>
                   <p>Turno: ${alumnas[i].turno}</p>
                   <p>Progreso: ${alumnas[i].progreso.porcentajeCompletado}%</p>
                 </div>`
    }
    containerDos.innerHTML = result;
  });
}
//Imprime alumnas Lima 3 G
const containerTres = document.getElementById('result');

alumnasTerceraInfo = (alumnas) => {
  document.getElementById('terceralima').addEventListener('click',(event) => {
    let result = '';
    console.log(alumnas.length);

    for (let i = 0; i < alumnas.length; i++) {

      result += `<div class="card">
                   <p>Nombre: ${alumnas[i].nombre}</p>
                   <p>Correo: ${alumnas[i].correo}</p>
                   <p>Turno: ${alumnas[i].turno}</p>
                   <p>Progreso: ${alumnas[i].progreso.porcentajeCompletado}%</p>
                 </div>`
    }
    containerTres.innerHTML = result;
  });
}
