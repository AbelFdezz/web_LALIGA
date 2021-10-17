let tbody = document.getElementById("tbody");

function tablebody() {
  for (let i = 0; i < dataPartidos.matches.length; i++) {
    let logoLocal = document.createElement("img");

    // logoLocal.src =dataClasificacion.standings[0].table[i].team.crestUrl;

    let logosVisitante =
      "https://crests.football-data.org/" +
      dataPartidos.matches[i].awayTeam.id +
      ".svg";
    let logosLocal =
      "https://crests.football-data.org/" +
      dataPartidos.matches[i].homeTeam.id +
      ".svg";
    let crestLocal = document.createElement("img");
    let crestVisitante = document.createElement("img");
    let row = document.createElement("tr");
    let equipoLocal = document.createElement("td");
    let banderaLocal = document.createElement("td");
    let resultado = document.createElement("td");
    let banderaVisitante = document.createElement("td");
    let equipoVisitante = document.createElement("td");

    tbody.append(row);
    row.append(
       crestLocal,
      equipoLocal,
      resultado,
      crestVisitante,
      equipoVisitante
    );
    let marcador = `${dataPartidos.matches[i].score.fullTime.homeTeam}-${dataPartidos.matches[i].score.fullTime.awayTeam}`;

    if (marcador == "null-null") {
      marcador = "Por jugar";
    }
    crestLocal.src = logosLocal;
    crestVisitante.src = logosVisitante;

    equipoLocal.innerHTML = dataPartidos.matches[i].homeTeam.name;
    equipoVisitante.innerHTML = dataPartidos.matches[i].awayTeam.name;
    resultado.innerHTML = marcador;
    banderaVisitante.innerHTML = crestVisitante;
    banderaLocal.innerHTML = crestLocal;
  }
}
tablebody();

//console.log(dataPartidos.matches[i].awayTeam.id)
//console.log(dataClasificacion.standings[0].table);

/*
    let imagen = document.createElement("img");
    imagen.src =dataClasificacion.standings[0].table[i].team.crestUrl;
*/
