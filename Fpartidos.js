function creacionTabla(partidos) {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  if (partidos.length == 0){
    tbody.innerHTML = ("<p>No hay partidos relacionados.</p>")
   }else{
  for (let i = 0; i < partidos.length; i++) {
    let logosVisitante =
      "https://crests.football-data.org/" + partidos[i].awayTeam.id + ".svg";
    let logosLocal =
      "https://crests.football-data.org/" + partidos[i].homeTeam.id + ".svg";
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
    let marcador = `${partidos[i].score.fullTime.homeTeam}-${partidos[i].score.fullTime.awayTeam}`;

    if (marcador == "null-null") {
      marcador = "Por jugar";
    }
    crestLocal.src = logosLocal;
    crestVisitante.src = logosVisitante;

    equipoLocal.innerHTML = partidos[i].homeTeam.name;
    equipoVisitante.innerHTML = partidos[i].awayTeam.name;
    resultado.innerHTML = marcador;
    banderaVisitante.innerHTML = crestVisitante;
    banderaLocal.innerHTML = crestLocal;
  }
}
}

creacionTabla(dataPartidos.matches);
let arrayMatches = dataPartidos.matches; //aquí está la clave? cambiar json por nueva fuente.
let arrListaEquipos = arrayMatches.map(function (equipo, index) {
  return equipo.homeTeam.name;
});

let setEquipos = [...new Set(arrListaEquipos)];
//funcion crear el select
function arrSelect() {
  let select = document.getElementById("inputEquipos");
  for (let l = 0; l < setEquipos.length; l++) {
    let optionEquipo = document.createElement("option");
    select.append(optionEquipo);
    optionEquipo.innerHTML = setEquipos[l];
  }
}
arrSelect();

let input_equipo = document.getElementById("inputEquipos");
let buscar_equipo = document.getElementById("boton_buscar");
let radioTodos = document.getElementById("radioTodos");
let radioGanados = document.getElementById("radioGanados");
let radioEmpatados = document.getElementById("radioEmpatados");
let radioPerdidos = document.getElementById("radioPerdidos");
let radioProximos = document.getElementById("radioProximos");

//función filtro principal
function filtroEquipos() {
  let filterMatches = [];
  for (let i = 0; i < arrayMatches.length; i++) {
    if (
      arrayMatches[i].awayTeam.name ==
        document.getElementById("inputEquipos").value ||
      arrayMatches[i].homeTeam.name ==
        document.getElementById("inputEquipos").value
    ) {
      filterMatches.push(arrayMatches[i]);
    }
  }

  if (document.getElementById("radioEmpatados").checked == true) {
    filtroEmpatados(filterMatches);
    return;
  } else if (document.getElementById("radioTodos").checked == true) {
    creacionTabla(filterMatches);
    return;
  } else if (document.getElementById("radioGanados").checked == true) {
    filtroGanados(filterMatches);
    return;
  } else if (document.getElementById("radioPerdidos").checked == true) {
    filtroPerdidos(filterMatches);
    return;
  } else if (document.getElementById("radioProximos").checked == true) {
    filtroProximos(filterMatches);
    return;
  }
  creacionTabla(filterMatches);
}
//cambiar el nombre, mendrugo
document.getElementById("boton_buscar").addEventListener("click", function () {
  filtroEquipos();
});

//filtros de empatados ganados perdidos y próximos.

function filtroEmpatados(filterMatches) {
  let empatadosMatches = [];
  for (let i = 0; i < filterMatches.length; i++) {
    if (filterMatches[i].score.winner == "DRAW") {
      empatadosMatches.push(filterMatches[i]);
    }
  }
  creacionTabla(empatadosMatches);
}

function filtroGanados(filterMatches) {
  let ganadosMatches = [];
  for (let i = 0; i < filterMatches.length; i++) {
    if (
      filterMatches[i].score.winner == "AWAY_TEAM" &&
      filterMatches[i].awayTeam.name ==
        document.getElementById("inputEquipos").value
    ) {
      ganadosMatches.push(filterMatches[i]);
    } else if (
      filterMatches[i].score.winner == "HOME_TEAM" &&
      filterMatches[i].homeTeam.name ==
        document.getElementById("inputEquipos").value
    ) {
      ganadosMatches.push(filterMatches[i]);
    }
  }
  console.log(ganadosMatches);
  creacionTabla(ganadosMatches);
}

function filtroPerdidos(filterMatches) {
  let perdidosMatches = [];
  for (let i = 0; i < filterMatches.length; i++) {
    if (
      filterMatches[i].score.winner == "AWAY_TEAM" &&
      filterMatches[i].homeTeam.name ==
        document.getElementById("inputEquipos").value
    ) {
      perdidosMatches.push(filterMatches[i]);
    } else if (
      filterMatches[i].score.winner == "HOME_TEAM" &&
      filterMatches[i].awayTeam.name ==
        document.getElementById("inputEquipos").value
    ) {
      perdidosMatches.push(filterMatches[i]);
    }
  }
  console.log(perdidosMatches);
  creacionTabla(perdidosMatches);
}
function filtroProximos(filterMatches) {
  let proximosMatches = [];
  for (let i = 0; i < filterMatches.length; i++) {
    if (filterMatches[i].status !== "FINISHED") {
      proximosMatches.push(filterMatches[i]);
    }
  }
  creacionTabla(proximosMatches);
}


let api = "2b079ae1015a4bfa963e25658fd610e9";
let url = "https://api.football-data.org/v2/competitions/2014/matches";

fetch(url, {
  method: "GET",
  headers: {
    "X-Auth-Token": api,
  },
})
  .then(function (response) {
    if (response.ok) { //si todo va bien..
      return response.json(); //responde con los datos
    }
   // throw new Error("fallo en el server")

  })
  .then(function (data) { //los recibimos como data
//console.log(data) //aquí están los matches actualizados.
init(data);

  })
  .catch(function (err){
     // console.error(err);     //si hay un error, se muestra aquí.
  });

  function init(data){
    creacionTabla(data.matches)

    //aquí meter todos los parámetros que hagan falta.
  }
  //function creacionTabla(partidos) recibiría la información para contigunar. (minuto 51 del vídeo)



/*

*/
