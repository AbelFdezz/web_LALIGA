let api = "2b079ae1015a4bfa963e25658fd610e9";
let url = "https://api.football-data.org/v2/competitions/2014/standings";

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
    throw new Error("fallo en el server");
  })
  .then(function (data) {
    spinner();
    init(data);
  })
  .catch(function (err) {});

function init(data) {
  tableRanking(data.standings[0].table);
}

function spinner() {
  document.getElementById("spinner").style.display = "none";
}

function tableRanking(rank) {
  let tbody = document.getElementById("tbody");

  for (let i = 0; i < rank.length; i++) {
    let imagen = document.createElement("img");
    imagen.src = rank[i].team.crestUrl;

    let arr = new Array(
      rank[i].position,
      imagen,
      rank[i].team.name,
      rank[i].playedGames,
      rank[i].won,
      rank[i].draw,
      rank[i].lost,
      rank[i].goalsFor,
      rank[i].goalsAgainst,
      rank[i].goalDifference,
      rank[i].points
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
