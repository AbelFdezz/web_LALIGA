
let tbody = document.getElementById("tbody");

function tablebody() {
  for (let i = 0; i < dataPartidos.matches.length; i++) {
    let row = document.createElement("tr");
    let equipoLocal = document.createElement("td");
    let resultado = document.createElement("td");
    let equipoVisitante = document.createElement("td");

    
    tbody.appendChild(row);
    row.append(equipoLocal, resultado, equipoVisitante);
    let marcador = `${dataPartidos.matches[i].score.fullTime.homeTeam}-${dataPartidos.matches[i].score.fullTime.awayTeam}`;
   

    if  (marcador == "null-null") {
     marcador = "Por disputar";
    }

    equipoLocal.innerHTML = dataPartidos.matches[i].homeTeam.name;
    equipoVisitante.innerHTML = dataPartidos.matches[i].awayTeam.name;
    resultado.innerHTML = marcador;
}
}
tablebody();
