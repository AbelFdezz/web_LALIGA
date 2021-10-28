
let api = "2b079ae1015a4bfa963e25658fd610e9";
let url = "https://api.football-data.org/v2/competitions/2014/matches";

fetch(url, {
  method: "GET",
  headers: {
    "X-Auth-Token": api,
  },
})
  .then(function (response) {
    if (response.ok) {
 
      return response.json(); 
    }
    // throw new Error("fallo en el server")
  })
  .then(function (data) {
    spinner();
    init(data);
  })
  .catch(function (err) {
    // console.error(err);     
  });
  function init(data) {
    stats(data.matches)
  }

  function spinner() {
  document.getElementById('spinner')
          .style.display = 'none';
} 

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
  tablaGoles(arrEquipos);
}

function tablaAvg(equiposAVG) {
 equiposAVG.sort(function (b, a) {
    if (a.avg > b.avg) {
      return 1;
    }
    if (a.avg < b.avg) {
      return -1;
    }
    return 0;
  });
 crearTablaAvg(equiposAVG);
}

function crearTablaAvg(equiposAVG) {

  for (let i = 0; i < 5; i++) {
    let logosLocal =
      "https://crests.football-data.org/" + equiposAVG[i].id + ".svg";

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
    equipo.innerHTML = equiposAVG[i].nombre;
    goles.innerHTML = equiposAVG[i].goles;
    encuentros.innerHTML = equiposAVG[i].partidos;
    golaverage.innerHTML = equiposAVG[i].avg.toFixed(2);
  }
}

function tablaGoles(golesFuera) {

  golesFuera.sort(function (a, b) {
    if (a.golesContraV > b.golesContraV) {
      return 1;
    }
    if (a.golesContraV < b.golesContraV) {
      return -1;
    }
    return 0;
  });
  crearTablaGoles(golesFuera);
}
function crearTablaGoles(golesFuera) {
  for (let i = 0; i < 5; i++) {
    let logosLocal2 =
      "https://crests.football-data.org/" + golesFuera[i].id + ".svg";

    let row2 = document.createElement("tr");
    let crestLocal2 = document.createElement("img");
    let equipo2 = document.createElement("td");
    let banderaLocal2 = document.createElement("td");
    let goles2 = document.createElement("td");

    let golaverage2 = document.createElement("td");

    tbody2.append(row2);
    row2.append(crestLocal2, equipo2, goles2, golaverage2);

    crestLocal2.src = logosLocal2;
    banderaLocal2.innerHTML = crestLocal2;
    equipo2.innerHTML = golesFuera[i].nombre;
    goles2.innerHTML = golesFuera[i].goles;

    golaverage2.innerHTML = golesFuera[i].golesContraV;
  }
}
