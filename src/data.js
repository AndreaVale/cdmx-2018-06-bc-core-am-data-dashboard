const objetoLima = {
  generacion:"tercera, cuarta, quinta"
  }
const objetoMex = {
  generacion:"tercera, cuarta, quinta",
}
const objetoSant = {
  generacion:"tercera, cuarta, quinta",
}

const objetoSedes = [objetoLima,objetoMex,objetoSant];

window.generaciones = {
  generation: () => {
    for (var i = 0; i < objetoSedes.length; i++) {
      return objetoSedes[i].generacion
    }
  }
};
