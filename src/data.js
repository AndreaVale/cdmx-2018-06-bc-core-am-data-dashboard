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
      //Aqui se imprimirian las alumnas de Lima
      // con esto se imprime el nombre y el correo de cada una
      /* //.lo puse al reves por que primero salia el correo, mejor primero el nombre.....primera estudiante con su primera key(nombre)(correo)...........primera estudiante con el valor de la primera key
       document.getElementById('estudiantesLimaTerceraN0').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[0])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[0])[1];
       document.getElementById('estudiantesLimaTerceraC0').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[0])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[0])[0];
       document.getElementById('estudiantesLimaTerceraN1').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[1])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[1])[1];
       document.getElementById('estudiantesLimaTerceraC1').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[1])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[1])[0];
       document.getElementById('estudiantesLimaTerceraN2').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[2])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[2])[1];
       document.getElementById('estudiantesLimaTerceraC2').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[2])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[2])[0];
       document.getElementById('estudiantesLimaTerceraN3').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[3])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[3])[1];
       document.getElementById('estudiantesLimaTerceraC3').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[3])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[3])[0];
       document.getElementById('estudiantesLimaTerceraN4').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[4])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[4])[1];
       document.getElementById('estudiantesLimaTerceraC4').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[4])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[4])[0];
       document.getElementById('estudiantesLimaTerceraN5').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[5])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[5])[1];
       document.getElementById('estudiantesLimaTerceraC5').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[5])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[5])[0];
       document.getElementById('estudiantesLimaTerceraN6').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[6])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[6])[1];
       document.getElementById('estudiantesLimaTerceraC6').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[6])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[6])[0];
       document.getElementById('estudiantesLimaTerceraN7').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[7])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[7])[1];
       document.getElementById('estudiantesLimaTerceraC7').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[7])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[7])[0];
       document.getElementById('estudiantesLimaTerceraN8').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[8])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[8])[1];
       document.getElementById('estudiantesLimaTerceraC8').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[8])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[8])[0];
       document.getElementById('estudiantesLimaTerceraN9').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[9])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[9])[1];
       document.getElementById('estudiantesLimaTerceraC9').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[9])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[9])[0];
       document.getElementById('estudiantesLimaTerceraN10').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[10])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[10])[1];
       document.getElementById('estudiantesLimaTerceraC10').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[10])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[10])[0];
       document.getElementById('estudiantesLimaTerceraN11').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[11])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[11])[1];
       document.getElementById('estudiantesLimaTerceraC11').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[11])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[11])[0];
       document.getElementById('estudiantesLimaTerceraN12').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[12])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[12])[1];
       document.getElementById('estudiantesLimaTerceraC12').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[12])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[12])[0];
       document.getElementById('estudiantesLimaTerceraN13').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[13])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[13])[1];
       document.getElementById('estudiantesLimaTerceraC13').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[13])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[13])[0];
       document.getElementById('estudiantesLimaTerceraN14').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[14])[1]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[14])[1];
       document.getElementById('estudiantesLimaTerceraC14').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[14])[0]+ ": "  +  Object.values(data.lima.generacion.tercera.estudiantes[14])[0];
   */
  //aqui se imprime el progreso y la duracion
  /* //...................................................................la primera key del progreso de la primer estudiante(duracionprograma)(porcentaje)..........el valor de la key anterior......... le agrege el signo %
      document.getElementById('estudiantesLimaTerceraC0').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[0].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[0].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN1').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[1].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[1].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC1').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[1].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[1].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN2').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[2].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[2].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC2').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[2].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[2].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN3').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[3].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[3].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC3').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[3].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[3].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN4').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[4].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[4].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC4').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[4].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[4].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN5').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[5].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[5].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC5').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[5].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[5].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN6').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[6].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[6].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC6').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[6].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[6].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN7').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[7].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[7].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC7').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[7].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[7].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN8').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[8].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[8].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC8').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[8].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[8].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN9').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[9].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[9].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC9').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[9].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[9].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN10').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[10].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[10].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC10').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[10].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[10].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN11').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[11].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[11].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC11').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[11].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[11].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN12').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[12].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[12].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC12').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[12].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[12].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN13').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[13].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[13].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC13').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[13].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[13].progreso)[0];
      document.getElementById('estudiantesLimaTerceraN14').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[14].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[14].progreso)[1] +"%";
      document.getElementById('estudiantesLimaTerceraC14').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[14].progreso)[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[14].progreso)[0];
      */ //abajo hice un tema por cada una y un subtema por cada una, es que me dio sueño :(
      //.......................................................................................entrando al primer estudiante..primer tema..nombre del tema........duracionde tema..... concatenar con el valor de la key duracion de tema:........................................................el numero.
      document.getElementById('estudiantesLimaTerceraN0').innerHTML = "01-Introduccion-a-programacion:  "+ Object.keys(data.lima.generacion.tercera.estudiantes[0].progreso.temas["01-Introduccion-a-programacion"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[0].progreso.temas["01-Introduccion-a-programacion"])[0];
      document.getElementById('estudiantesLimaTerceraC0').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[0].progreso.temas["01-Introduccion-a-programacion"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[0].progreso.temas["01-Introduccion-a-programacion"])[1];
      document.getElementById('estudiantesLimaTerceraP0').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[0].progreso.temas["01-Introduccion-a-programacion"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[0].progreso.temas["01-Introduccion-a-programacion"])[2]+"%";
      //.......................................................................................entrando al segundo estudiante..segundo tema.tema...........(duracion)(completado)(porcentaje).........concatenar con el valor de las keys anteriores, se puso el nombre exacto del tema por que habia error por empezar con numero al querer agregarlo con un punto antes
      document.getElementById('estudiantesLimaTerceraN1').innerHTML = "02-Variables-y-tipo-de-datos:  "+ Object.keys(data.lima.generacion.tercera.estudiantes[1].progreso.temas["02-Variables-y-tipo-de-datos"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[1].progreso.temas["02-Variables-y-tipo-de-datos"])[0];
      document.getElementById('estudiantesLimaTerceraC1').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[1].progreso.temas["02-Variables-y-tipo-de-datos"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[1].progreso.temas["02-Variables-y-tipo-de-datos"])[1];
      document.getElementById('estudiantesLimaTerceraP1').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[1].progreso.temas["02-Variables-y-tipo-de-datos"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[1].progreso.temas["02-Variables-y-tipo-de-datos"])[2]+"%";
      //.....para diferenciar datos impresos puse en tema al principio como string..............................entrando al tercer estudiante..tercer tema.....................duracio,completado,porcentaje..concatenado con el valor de la key.........
      document.getElementById('estudiantesLimaTerceraN2').innerHTML = "03-UX:  "+ Object.keys(data.lima.generacion.tercera.estudiantes[2].progreso.temas["03-UX"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[2].progreso.temas["03-UX"])[0];
      document.getElementById('estudiantesLimaTerceraC2').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[2].progreso.temas["03-UX"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[2].progreso.temas["03-UX"])[1];
      document.getElementById('estudiantesLimaTerceraP2').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[2].progreso.temas["03-UX"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[2].progreso.temas["03-UX"])[2]+"%";
      //aqui se llega al subtema,..................................se entro al primer subtema de la cuarta estudiante................el primer subtema del primer tema...........se concatena con el valor en este caso son 3 valores (completado,duracion y tipo).........
      document.getElementById('estudiantesLimaTerceraN3').innerHTML = "00-bienvenida-orientacion: "+ Object.keys(data.lima.generacion.tercera.estudiantes[3].progreso.temas["01-Introduccion-a-programacion"].subtemas["00-bienvenida-orientacion"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[3].progreso.temas["01-Introduccion-a-programacion"].subtemas["00-bienvenida-orientacion"])[0];
      document.getElementById('estudiantesLimaTerceraC3').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[3].progreso.temas["01-Introduccion-a-programacion"].subtemas["00-bienvenida-orientacion"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[3].progreso.temas["01-Introduccion-a-programacion"].subtemas["00-bienvenida-orientacion"])[1];
      document.getElementById('estudiantesLimaTerceraP3').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[3].progreso.temas["01-Introduccion-a-programacion"].subtemas["00-bienvenida-orientacion"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[3].progreso.temas["01-Introduccion-a-programacion"].subtemas["00-bienvenida-orientacion"])[2];
  // se entran aqui a los atributos del primer subtema (completado, duracion,tipo) del primer tema
      document.getElementById('estudiantesLimaTerceraN4').innerHTML = "01-desarrollo-profesional: "+ Object.keys(data.lima.generacion.tercera.estudiantes[4].progreso.temas["01-Introduccion-a-programacion"].subtemas["01-desarrollo-profesional"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[4].progreso.temas["01-Introduccion-a-programacion"].subtemas["01-desarrollo-profesional"])[0];
      document.getElementById('estudiantesLimaTerceraC4').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[4].progreso.temas["01-Introduccion-a-programacion"].subtemas["01-desarrollo-profesional"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[4].progreso.temas["01-Introduccion-a-programacion"].subtemas["01-desarrollo-profesional"])[1];
      document.getElementById('estudiantesLimaTerceraP4').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[4].progreso.temas["01-Introduccion-a-programacion"].subtemas["01-desarrollo-profesional"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[4].progreso.temas["01-Introduccion-a-programacion"].subtemas["01-desarrollo-profesional"])[2];
  // segundo subtema del primer tema
      document.getElementById('estudiantesLimaTerceraN5').innerHTML = "02-por-que-aprender-a-programar: "+ Object.keys(data.lima.generacion.tercera.estudiantes[5].progreso.temas["01-Introduccion-a-programacion"].subtemas["02-por-que-aprender-a-programar"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[5].progreso.temas["01-Introduccion-a-programacion"].subtemas["02-por-que-aprender-a-programar"])[0];
      document.getElementById('estudiantesLimaTerceraC5').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[5].progreso.temas["01-Introduccion-a-programacion"].subtemas["02-por-que-aprender-a-programar"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[5].progreso.temas["01-Introduccion-a-programacion"].subtemas["02-por-que-aprender-a-programar"])[1];
      document.getElementById('estudiantesLimaTerceraP5').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[5].progreso.temas["01-Introduccion-a-programacion"].subtemas["02-por-que-aprender-a-programar"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[5].progreso.temas["01-Introduccion-a-programacion"].subtemas["02-por-que-aprender-a-programar"])[2];
  // tercer subtema primer tema
      document.getElementById('estudiantesLimaTerceraN6').innerHTML = "03-tu-primer-sitio: "+ Object.keys(data.lima.generacion.tercera.estudiantes[6].progreso.temas["01-Introduccion-a-programacion"].subtemas["03-tu-primer-sitio"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[6].progreso.temas["01-Introduccion-a-programacion"].subtemas["03-tu-primer-sitio"])[0];
      document.getElementById('estudiantesLimaTerceraC6').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[6].progreso.temas["01-Introduccion-a-programacion"].subtemas["03-tu-primer-sitio"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[6].progreso.temas["01-Introduccion-a-programacion"].subtemas["03-tu-primer-sitio"])[1];
      document.getElementById('estudiantesLimaTerceraP6').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[6].progreso.temas["01-Introduccion-a-programacion"].subtemas["03-tu-primer-sitio"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[6].progreso.temas["01-Introduccion-a-programacion"].subtemas["03-tu-primer-sitio"])[2];
  // cuarto subtema del primer tema
      document.getElementById('estudiantesLimaTerceraN7').innerHTML = "04-quiz: "+ Object.keys(data.lima.generacion.tercera.estudiantes[7].progreso)[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[7].progreso.temas["01-Introduccion-a-programacion"].subtemas["04-quiz"])[0] +"%";
      document.getElementById('estudiantesLimaTerceraC7').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[7].progreso.temas["01-Introduccion-a-programacion"].subtemas["04-quiz"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[7].progreso.temas["01-Introduccion-a-programacion"].subtemas["04-quiz"])[1];
      document.getElementById('estudiantesLimaTerceraP7').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[7].progreso.temas["01-Introduccion-a-programacion"].subtemas["04-quiz"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[7].progreso.temas["01-Introduccion-a-programacion"].subtemas["04-quiz"])[2];
  // primer subtema del segundo tema
      document.getElementById('estudiantesLimaTerceraN8').innerHTML = "00-Tipos-de-datos-y-operadores:"+ Object.keys(data.lima.generacion.tercera.estudiantes[8].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["00-Tipos-de-datos-y-operadores"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[8].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["00-Tipos-de-datos-y-operadores"])[0];
      document.getElementById('estudiantesLimaTerceraC8').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[8].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["00-Tipos-de-datos-y-operadores"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[8].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["00-Tipos-de-datos-y-operadores"])[1];
      document.getElementById('estudiantesLimaTerceraP8').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[8].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["00-Tipos-de-datos-y-operadores"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[8].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["00-Tipos-de-datos-y-operadores"])[2];
      //
      document.getElementById('estudiantesLimaTerceraN9').innerHTML = "01-variables: "+ Object.keys(data.lima.generacion.tercera.estudiantes[9].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["01-variables"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[9].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["01-variables"])[0] +"%";
      document.getElementById('estudiantesLimaTerceraC9').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[9].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["01-variables"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[9].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["01-variables"])[1];
      document.getElementById('estudiantesLimaTerceraP9').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[9].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["01-variables"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[9].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["01-variables"])[2];
  //
      document.getElementById('estudiantesLimaTerceraN10').innerHTML = "02-auto-aprendizaje-MDN: "+ Object.keys(data.lima.generacion.tercera.estudiantes[10].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["02-auto-aprendizaje-MDN"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[10].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["02-auto-aprendizaje-MDN"])[0];
      document.getElementById('estudiantesLimaTerceraC10').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[10].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["02-auto-aprendizaje-MDN"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[10].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["02-auto-aprendizaje-MDN"])[1];
      document.getElementById('estudiantesLimaTerceraP10').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[10].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["02-auto-aprendizaje-MDN"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[10].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["02-auto-aprendizaje-MDN"])[2];
  //
      document.getElementById('estudiantesLimaTerceraN11').innerHTML = "03-comments: "+ Object.keys(data.lima.generacion.tercera.estudiantes[11].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["03-comments"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[11].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["03-comments"])[0];
      document.getElementById('estudiantesLimaTerceraC11').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[11].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["03-comments"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[11].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["03-comments"])[1];
      document.getElementById('estudiantesLimaTerceraP11').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[11].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["03-comments"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[11].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["03-comments"])[2];
  //
      document.getElementById('estudiantesLimaTerceraN12').innerHTML = "04-ejercicios-guiados: "+ Object.keys(data.lima.generacion.tercera.estudiantes[12].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["04-ejercicios-guiados"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[12].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["04-ejercicios-guiados"])[0];
      document.getElementById('estudiantesLimaTerceraC12').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[12].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["04-ejercicios-guiados"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[12].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["04-ejercicios-guiados"])[1];
      document.getElementById('estudiantesLimaTerceraP12').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[12].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["04-ejercicios-guiados"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[12].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["04-ejercicios-guiados"])[2];
  //
      document.getElementById('estudiantesLimaTerceraN13').innerHTML = "05-quiz: "+ Object.keys(data.lima.generacion.tercera.estudiantes[13].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["05-quiz"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[13].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["05-quiz"])[0];
      document.getElementById('estudiantesLimaTerceraC13').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[13].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["05-quiz"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[13].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["05-quiz"])[1];
      document.getElementById('estudiantesLimaTerceraP13').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[13].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["05-quiz"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[13].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["05-quiz"])[2];
  //
      document.getElementById('estudiantesLimaTerceraN14').innerHTML = "06-ejercicios: "+ Object.keys(data.lima.generacion.tercera.estudiantes[14].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["06-ejercicios"])[0]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[14].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["06-ejercicios"])[0];
      document.getElementById('estudiantesLimaTerceraC14').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[14].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["06-ejercicios"])[1]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[14].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["06-ejercicios"])[1];
      document.getElementById('estudiantesLimaTerceraP14').innerHTML = Object.keys(data.lima.generacion.tercera.estudiantes[14].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["06-ejercicios"])[2]+ ": "  + Object.values(data.lima.generacion.tercera.estudiantes[14].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["06-ejercicios"])[2];

    }).catch((error) => {
    console.log(error);
  })
