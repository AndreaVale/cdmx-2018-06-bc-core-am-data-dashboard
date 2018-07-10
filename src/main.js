
// Imprime generaciones en MENU -------------------

const pintaGeneracionesLima = (generacion) => {
  const containerCampus = document.getElementById('generacionesLima');
  generacion.forEach((sede) => {
    const option = document.createElement('label');
    option.id = sede + 'lima';
    option.innerHTML = sede + ' generacion';
    containerCampus.appendChild(option);
  });
};

const pintaGeneracionesMex = (generacion) => {
  const containerCampus = document.getElementById('generacionesMex');
  generacion.forEach((sede) => {
    const option = document.createElement('label');
    option.id = sede + 'mexico';
    option.innerHTML = sede + ' generacion';
    containerCampus.appendChild(option);
  });
};

const pintaGeneracionesSnt = (generacion) => {
  const containerCampus = document.getElementById('generacionesSnt');
  generacion.forEach((sede) => {
    const option = document.createElement('label');
    option.id = sede + 'santiago';
    option.innerHTML = sede + ' generacion';
    containerCampus.appendChild(option);
  });
};

// Inicia Impresion de ALUMNAS ------------------------------------------

// Alumnas Lima 4ta Generacion ------------------------------------------
const containerGeracion = document.getElementById('titleResult');
const container = document.getElementById('result');
alumnasCuartaInfo = (alumnas) => {
  document.getElementById('cuartalima').addEventListener('click', (event) => {
    let titleResult = '';
    let result = '';
    for (let i = 0; i < alumnas.length; i++) {
      result += `<tr>
                  <th scope="row">${alumnas[i].nombre}</th>
                  <td>${alumnas[i].correo}</td>
                  <td>${alumnas[i].turno}</td>
                  <td>${alumnas[i].progreso.porcentajeCompletado}%</td>
                  <td>${alumnas[i].progreso.duracionPrograma} hrs.</td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Temas</button></td>
                 </tr>`;
    }
    titleResult = `<div class="generacionTitle">
                    <img src="../src/images/generacion.png" alt="generacion">
                    <span class="generacion">4ta</span>
                    <h4>Generación Lima</h4>
                   </div>`;
    containerGeracion.innerHTML = titleResult;
    container.innerHTML = result;
    document.getElementById('grafica').style.display = 'none';
    document.getElementById('alumnasResult').style.display = 'initial';
  });
};
// Alumnas Lima 5ta Generacion ------------------------------------------
const containerGeracionDos = document.getElementById('titleResult');
const containerDos = document.getElementById('result');
alumnasQuintaInfo = (alumnas) => {
  document.getElementById('quintalima').addEventListener('click', (event) => {
    let titleResult = '';
    let result = '';
    for (let i = 0; i < alumnas.length; i++) {
      result += `<tr>
                  <th scope="row">${alumnas[i].nombre}</th>
                  <td>${alumnas[i].correo}</td>
                  <td>${alumnas[i].turno}</td>
                  <td>${alumnas[i].progreso.porcentajeCompletado}%</td>
                  <td>${alumnas[i].progreso.duracionPrograma} hrs.</td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Temas</button></td>
                 </tr>`;
    }
    titleResult = `<div class="generacionTitle">
                    <img src="../src/images/generacion.png" alt="generacion">
                    <span class="generacion">5ta</span>
                    <h4>Generación Lima</h4>
                   </div>`;
    containerGeracionDos.innerHTML = titleResult;
    containerDos.innerHTML = result;
    document.getElementById('grafica').style.display = 'none';
    document.getElementById('alumnasResult').style.display = 'initial';
  });
};
// Alumnas Lima 3ra Generacion ------------------------------------------
const containerGeracionTres = document.getElementById('titleResult');
const containerTres = document.getElementById('result');
alumnasTerceraInfo = (alumnas) => {
  document.getElementById('terceralima').addEventListener('click', (event) => {
    let titleResult = '';
    let result = '';
    for (let i = 0; i < alumnas.length; i++) {
      result += `<tr>
                  <th scope="row">${alumnas[i].nombre}</th>
                  <td>${alumnas[i].correo}</td>
                  <td>${alumnas[i].turno}</td>
                  <td>${alumnas[i].progreso.porcentajeCompletado}%</td>
                  <td>${alumnas[i].progreso.duracionPrograma} hrs.</td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Temas</button></td>
                 </tr>`;
    }
    titleResult = `<div class="generacionTitle">
                    <img src="../src/images/generacion.png" alt="generacion">
                    <span class="generacion">3ra</span>
                    <h4>Generación Lima</h4>
                   </div>`;
    containerGeracionTres.innerHTML = titleResult;
    containerTres.innerHTML = result;
    document.getElementById('grafica').style.display = 'none';
    document.getElementById('alumnasResult').style.display = 'initial';
  });
};
// Alumnas México 4ta Generacion ------------------------------------------
const containerGeracionCuatro = document.getElementById('titleResult');
const containerCuatro = document.getElementById('result');
alumnasCuartaMex = (alumnas) => {
  document.getElementById('cuartamexico').addEventListener('click', (event) => {
    let titleResult = '';
    let result = '';
    for (let i = 0; i < alumnas.length; i++) {
      result += `<tr>
                  <th scope="row">${alumnas[i].nombre}</th>
                  <td>${alumnas[i].correo}</td>
                  <td>${alumnas[i].turno}</td>
                  <td>${alumnas[i].progreso.porcentajeCompletado}%</td>
                  <td>${alumnas[i].progreso.duracionPrograma} hrs.</td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Temas</button></td>
                 </tr>`;
    }
    titleResult = `<div class="generacionTitle">
                    <img src="../src/images/generacion.png" alt="generacion">
                    <span class="generacion">4ta</span>
                    <h4>Generación México</h4>
                   </div>`;
    containerGeracionCuatro.innerHTML = titleResult;
    containerCuatro.innerHTML = result;
    document.getElementById('grafica').style.display = 'none';
    document.getElementById('alumnasResult').style.display = 'initial';
  });
};
// Alumnas México 5ta Generacion ------------------------------------------
const containerGeracionQuinto = document.getElementById('titleResult');
const containerQuinto = document.getElementById('result');
alumnasQuintaMex = (alumnas) => {
  document.getElementById('quintamexico').addEventListener('click', (event) => {
    let titleResult = '';
    let result = '';
    for (let i = 0; i < alumnas.length; i++) {
      result += `<tr>
                  <th scope="row">${alumnas[i].nombre}</th>
                  <td>${alumnas[i].correo}</td>
                  <td>${alumnas[i].turno}</td>
                  <td>${alumnas[i].progreso.porcentajeCompletado}%</td>
                  <td>${alumnas[i].progreso.duracionPrograma} hrs.</td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Temas</button></td>
                 </tr>`;
    }
    titleResult = `<div class="generacionTitle">
                    <img src="../src/images/generacion.png" alt="generacion">
                    <span class="generacion">5ta</span>
                    <h4>Generación México</h4>
                   </div>`;
    containerGeracionQuinto.innerHTML = titleResult;
    containerQuinto.innerHTML = result;
    document.getElementById('grafica').style.display = 'none';
    document.getElementById('alumnasResult').style.display = 'initial';
  });
};
// Alumnas México 3ra Generacion ------------------------------------------
const containerGeracionSexto = document.getElementById('titleResult');
const containerSexto = document.getElementById('result');
alumnasTerceraMex = (alumnas) => {
  document.getElementById('terceramexico').addEventListener('click', (event) => {
    let titleResult = '';
    let result = '';
    for (let i = 0; i < alumnas.length; i++) {
      result += `<tr>
                  <th scope="row">${alumnas[i].nombre}</th>
                  <td>${alumnas[i].correo}</td>
                  <td>${alumnas[i].turno}</td>
                  <td>${alumnas[i].progreso.porcentajeCompletado}%</td>
                  <td>${alumnas[i].progreso.duracionPrograma} hrs.</td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Temas</button></td>
                 </tr>`;
    }
    titleResult = `<div class="generacionTitle">
                    <img src="../src/images/generacion.png" alt="generacion">
                    <span class="generacion">3ra</span>
                    <h4>Generación México</h4>
                   </div>`;
    containerGeracionSexto.innerHTML = titleResult;
    containerSexto.innerHTML = result;
    document.getElementById('grafica').style.display = 'none';
    document.getElementById('alumnasResult').style.display = 'initial';
  });
};
// Alumnas Santiago 4ta Generacion ------------------------------------------
const containerGeracionSiete = document.getElementById('titleResult');
const containerSiete = document.getElementById('result');
alumnasCuartaSnt = (alumnas) => {
  document.getElementById('cuartasantiago').addEventListener('click', (event) => {
    let titleResult = '';
    let result = '';
    for (let i = 0; i < alumnas.length; i++) {
      result += `<tr>
                  <th scope="row">${alumnas[i].nombre}</th>
                  <td>${alumnas[i].correo}</td>
                  <td>${alumnas[i].turno}</td>
                  <td>${alumnas[i].progreso.porcentajeCompletado}%</td>
                  <td>${alumnas[i].progreso.duracionPrograma} hrs.</td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Temas</button></td>
                 </tr>`;
    }
    titleResult = `<div class="generacionTitle">
                    <img src="../src/images/generacion.png" alt="generacion">
                    <span class="generacion">4ta</span>
                    <h4>Generación Santiago</h4>
                   </div>`;
    containerGeracionSiete.innerHTML = titleResult;
    containerSiete.innerHTML = result;
    document.getElementById('grafica').style.display = 'none';
    document.getElementById('alumnasResult').style.display = 'initial';
  });
};
// Alumnas Santiago 5ta Generacion ------------------------------------------
const containerGeracionOcho = document.getElementById('titleResult');
const containerOcho = document.getElementById('result');
alumnasQuintaSnt = (alumnas) => {
  document.getElementById('quintasantiago').addEventListener('click', (event) => {
    let titleResult = '';
    let result = '';
    for (let i = 0; i < alumnas.length; i++) {
      result += `<tr>
                  <th scope="row">${alumnas[i].nombre}</th>
                  <td>${alumnas[i].correo}</td>
                  <td>${alumnas[i].turno}</td>
                  <td>${alumnas[i].progreso.porcentajeCompletado}%</td>
                  <td>${alumnas[i].progreso.duracionPrograma} hrs.</td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Temas</button></td>
                 </tr>`;
    }
    titleResult = `<div class="generacionTitle">
                    <img src="../src/images/generacion.png" alt="generacion">
                    <span class="generacion">5ta</span>
                    <h4>Generación Santiago</h4>
                   </div>`;
    containerGeracionOcho.innerHTML = titleResult;
    containerOcho.innerHTML = result;
    document.getElementById('grafica').style.display = 'none';
    document.getElementById('alumnasResult').style.display = 'initial';
  });
};
// Alumnas Santiago 3ra Generacion ------------------------------------------
const containerGeracionNueve = document.getElementById('titleResult');
const containerNueve = document.getElementById('result');
alumnasTerceraSnt = (alumnas) => {
  document.getElementById('tercerasantiago').addEventListener('click', (event) => {
    let titleResult = '';
    let result = '';
    for (let i = 0; i < alumnas.length; i++) {
      result += `<tr>
                  <th scope="row">${alumnas[i].nombre}</th>
                  <td>${alumnas[i].correo}</td>
                  <td>${alumnas[i].turno}</td>
                  <td>${alumnas[i].progreso.porcentajeCompletado}%</td>
                  <td>${alumnas[i].progreso.duracionPrograma} hrs.</td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Temas</button></td>
                 </tr>`;
    }
    titleResult = `<div class="generacionTitle">
                    <img src="../src/images/generacion.png" alt="generacion">
                    <span class="generacion">3ra</span>
                    <h4>Generación Santiago</h4>
                   </div>`;
    containerGeracionNueve.innerHTML = titleResult;
    containerNueve.innerHTML = result;
    document.getElementById('grafica').style.display = 'none';
    document.getElementById('alumnasResult').style.display = 'initial';
  });
};

// BUSCADOR -------------------------------------------------------------
/*let search = document.getElementById('search'),
  alumnas = document.getElementsByTagName('th');
const alumnasArray = Array.from(alumnas);

search.addEventListener('keyup', function(event) {
  var choice = event.target.value;
  const filteredStudents = alumnasArray.filter((alumna)=> {
    console.log(alumna.innerText)
    return alumna.innerHTML.toLowerCase().indexOf(choice.toLowerCase()) !== -1;
  })

  console.log(filteredStudents);
  /*alumnasArray.forEach(function(alumna) {

    if (alumna.innerHTML.toLowerCase().search(choice.toLowerCase()) === -1) {
      document.getElementById('titleResult').style.display = 'none';
      console.log(alumna.nextSibling);
      alumna.parentNode.style.display = 'none';
    } else {
      document.getElementById('titleResult').style.display = '';
      alumna.parentNode.style.display = '';
    }
  }, false);*/

//});
var search = document.getElementById("search"),
    alumnas = document.getElementsByTagName("th"),
    forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
    var choice = this.value;

    forEach.call(alumnas, function(f){
        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1) {
            document.getElementById('titleResult').style.display = 'none';
            f.parentNode.style.display = "none";
          }
        else {
            document.getElementById('titleResult').style.display = '';
            f.parentNode.style.display = "";
          }
    });
}, false);
