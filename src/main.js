let sede
// Lima
const sedeLima = document.getElementById('sede-lima')
// Mexico
const sedeMexico = document.getElementById('sede-cdmx')
// Santiago
const sedeSantiago = document.getElementById('sede-sntg')

// REFERENCIA AL ELEMENTO SEDE
const h2Sede = document.getElementById('sede')

// REFERENCIA AL ELEMENTO GENERACIONES
const ulGeneraciones = document.getElementById('generations')
// ASEGURAR QUE AL CARGAR LA PAGINA TENGA LOS DATOS DE INICIO
window.onload = async function () {
  await getData()
  console.log('CARGANDO...', laboratoria)
  sede = Object.keys(laboratoria)
}

// EVENTO LIMA
sedeLima.addEventListener('click', (event) => {
  event.preventDefault()
  ulGeneraciones.innerHTML = ''
  const key = 'lima'
  h2Sede.innerHTML = event.target.text

  const generaciones = Object.keys(laboratoria[key].generacion)
  console.log(generaciones)

  generaciones.forEach(e => {
    let li = document.createElement('li')
    li.innerHTML = `${e} - ${laboratoria[key].generacion[e].estudiantes.length} estudiantes`
    ulGeneraciones.appendChild(li)
  })
  })

  // EVENTO CDMX
  sedeMexico.addEventListener('click', (event) => {
    event.preventDefault()
    ulGeneraciones.innerHTML = ''
    const key = 'mexico'
    console.log(event.target.text)

    h2Sede.innerHTML = event.target.text
    const generaciones = Object.keys(laboratoria[key].generacion)
    console.log(generaciones)

    generaciones.forEach(e => {
      let li = document.createElement('li')
      li.innerHTML = `${e} - ${laboratoria[key].generacion[e].estudiantes.length} estudiantes`
      ulGeneraciones.appendChild(li)
    })
  })

  // EVENTO SANTIAGO
  sedeSantiago.addEventListener('click', (event) => {
    event.preventDefault()
    ulGeneraciones.innerHTML = ''
    const key = 'santiago'
    console.log(event.target.text)

    h2Sede.innerHTML = event.target.text
    const generaciones = Object.keys(laboratoria[key].generacion)
    console.log(generaciones)

    generaciones.forEach(e => {
      let li = document.createElement('li')
      li.innerHTML = `${e} - ${laboratoria[key].generacion[e].estudiantes.length} estudiantes`
      ulGeneraciones.appendChild(li)
    })
  })


//document.getElementById('lima').innerHTML = objetoSedes[i].generacion
//lima.addEventListener("click",event => {
  //let impresion = document.getElementById("generacionlima");
  //impresion.innerHTML = window.generaciones.generation();
//}
//)
//mex.addEventListener("click",event => {
  //let impresion2 = document.getElementById("generacion-mex");
  //impresion2.innerHTML = window.generaciones.generation();
//}
//)

//stg.addEventListener("click",event => {
  //let impresion3 = document.getElementById("generacion-stg");
  //impresion3.innerHTML = window.generaciones.generation();
//}
//)
