let tbody = document.getElementById("tbody");
let row = document.createElement("tr");
function tableRanking() {
  for (let i = 0; i < dataClasificacion.standings[0].table.length; i++) {
    let arr = new Array(
      dataClasificacion.standings[0].table[i].position,
      dataClasificacion.standings[0].table[i].team.crestUrl,
      dataClasificacion.standings[0].table[i].team.name,
      dataClasificacion.standings[0].table[i].playedGames,
      dataClasificacion.standings[0].table[i].won,
      dataClasificacion.standings[0].table[i].draw,
      dataClasificacion.standings[0].table[i].lost,
      dataClasificacion.standings[0].table[i].goalsFor,
      dataClasificacion.standings[0].table[i].goalsAgainst,
      dataClasificacion.standings[0].table[i].goalDifference,
      dataClasificacion.standings[0].table[i].points
    );
    let row = document.createElement("tr");

    for (let j = 0; j < arr.length; j++) {
       
      let celdas = document.createElement("td");
      row.append(celdas);
      tbody.append(row);
      celdas.innerHTML = arr[j];
    }
  }
}
tableRanking();
