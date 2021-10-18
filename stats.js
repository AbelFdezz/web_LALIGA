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
      };

      arrEquipos.push(crearTeam);
    } else {
      equipoV.goles += partidos[i].score.fullTime.awayTeam;
      equipoV.partidos++;
    }
  }
  for (let j = 0; j < arrEquipos.length; j++) {
    arrEquipos[j].avg = arrEquipos[j].goles / arrEquipos[j].partidos;
}
arrEquipos.sort(function (b, a) {
  if (a.avg > b.avg) {
    return 1;
  }
  if (a.avg < b.avg) {
    return -1;
  }
  return 0;
});
console.log(arrEquipos)
}


stats(dataPartidos.matches);



/*
for (let i = 0; i < arrEquipos.length; i++) {
    team.average = " goles/partidos";
    console.log(arrEquipos);
  }
*/