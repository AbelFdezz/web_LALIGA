let tbody = document.getElementById("tbody");
let row = document.createElement("tr");

function tableRanking() {
  for (let i = 0; i < dataClasificacion.standings[0].table.length; i++) {
    let imagen = document.createElement("img");
    imagen.src =dataClasificacion.standings[0].table[i].team.crestUrl;
    
    let arr = new Array(
      dataClasificacion.standings[0].table[i].position,
    imagen,
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
      celdas.append(arr[j]);
    }
  }
}
tableRanking();
console.log(dataClasificacion.standings[0].table)

/*

 `${<img src="dataClasificacion.standings[0].table[i].team.crestUrl" alt=""></img>}`,
dataClasificacion.standings[0].table[i].team.crestUrl


*/