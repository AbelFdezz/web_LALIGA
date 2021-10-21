function stats(partidos) {
  let arrEquipos = [];
  for (let i = 0; i < partidos.length; i++) {
    if (partidos[i].status != "FINISHED") {
      continue;
    }
    let equipoL = arrEquipos.find(function (team) {
      if (team.id == partidos[i].homeTeam.id) {
        return true;
      } else {
        return false;
      }
    });

    if (equipoL == undefined) {
      let crearTeam = {
        id: partidos[i].homeTeam.id,
        nombre: partidos[i].homeTeam.name,
        goles: partidos[i].score.fullTime.homeTeam,
        partidos: 1,
        golesContraV: 0,
      };

      arrEquipos.push(crearTeam);
    } else {
      equipoL.goles += partidos[i].score.fullTime.homeTeam;
      equipoL.partidos++;
    }
    let equipoV = arrEquipos.find(function (team) {
      if (team.id == partidos[i].awayTeam.id) {
        return true;
      } else {
        return false;
      }
    });

    if (equipoV == undefined) {
      let crearTeam = {
        id: partidos[i].awayTeam.id,
        nombre: partidos[i].awayTeam.name,
        goles: partidos[i].score.fullTime.awayTeam,
        partidos: 1,
        golesContraV: partidos[i].score.fullTime.homeTeam,
      };

      arrEquipos.push(crearTeam);
    } else {
      equipoV.goles += partidos[i].score.fullTime.awayTeam;
      equipoV.partidos++;
      equipoV.golesContraV += partidos[i].score.fullTime.homeTeam;
    }
  }
  for (let j = 0; j < arrEquipos.length; j++) {
    arrEquipos[j].avg = arrEquipos[j].goles / arrEquipos[j].partidos;
  }


  tablaAvg(arrEquipos);
  crearTablaAvg(arrEquipos);
  tablaGoles(arrEquipos);
  crearTablaGoles(arrEquipos);
}
stats(dataPartidos.matches);

function tablaAvg(arrEquipos2) {
  arrEquipos2.sort(function (b, a) {
    if (a.avg > b.avg) {
      return 1;
    }
    if (a.avg < b.avg) {
      return -1;
    }
    return 0;
  });
}

function crearTablaAvg(arrEquipos3) {
  let tbody = document.getElementById("tbody");

  for (let i = 0; i < 5; i++) {
    let logoLocal = document.createElement("img");
    // logoLocal.src =dataClasificacion.standings[0].table[i].team.crestUrl;
    let logosLocal =
      "https://crests.football-data.org/" + arrEquipos3[i].id + ".svg";

    let row = document.createElement("tr");
    let crestLocal = document.createElement("img");
    let equipo = document.createElement("td");
    let banderaLocal = document.createElement("td");
    let goles = document.createElement("td");
    let encuentros = document.createElement("td");
    let golaverage = document.createElement("td");

    tbody.append(row);
    row.append(crestLocal, equipo, goles, encuentros, golaverage);

    crestLocal.src = logosLocal;

    banderaLocal.innerHTML = crestLocal;
    equipo.innerHTML = arrEquipos3[i].nombre;
    goles.innerHTML = arrEquipos3[i].goles;
    encuentros.innerHTML = arrEquipos3[i].partidos;
    golaverage.innerHTML = arrEquipos3[i].avg.toFixed(2);
  }
}

function tablaGoles(arrEquipos4) {
  arrEquipos4.sort(function (a, b) {
    if (a.golesContraV > b.golesContraV) {
      return 1;
    }
    if (a.golesContraV < b.golesContraV) {
      return -1;
    }
    return 0;
  });
}
function crearTablaGoles(arrEquipos5) {
  let tbody2 = document.getElementById("tbody2");

  for (let i = 0; i < 5; i++) {
    let logoLocal2 = document.createElement("img");
    // logoLocal.src =dataClasificacion.standings[0].table[i].team.crestUrl;
    let logosLocal2 =
      "https://crests.football-data.org/" + arrEquipos5[i].id + ".svg";

    let row2 = document.createElement("tr");
    let crestLocal2 = document.createElement("img");
    let equipo2 = document.createElement("td");
    let banderaLocal2 = document.createElement("td");
    let goles2 = document.createElement("td");
    let encuentros2 = document.createElement("td");
    let golaverage2 = document.createElement("td");

    tbody2.append(row2);
    row2.append(crestLocal2, equipo2, goles2, encuentros2, golaverage2);

    crestLocal2.src = logosLocal2;

    banderaLocal2.innerHTML = crestLocal2;
    equipo2.innerHTML = arrEquipos5[i].nombre;
    goles2.innerHTML = arrEquipos5[i].goles;
    encuentros2.innerHTML = arrEquipos5[i].partidos;
    golaverage2.innerHTML = arrEquipos5[i].golesContraV;
  }
}
