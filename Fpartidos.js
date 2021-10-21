function creacionTabla(partidos) {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
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
creacionTabla(dataPartidos.matches);
let arrayMatches = dataPartidos.matches;
let arrListaEquipos = arrayMatches.map(function (equipo, index) {
  return equipo.homeTeam.name;
});
let setEquipos = [...new Set(arrListaEquipos)];

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

document.getElementById("boton_buscar").addEventListener("click", function () {
  filtroEquipos();
});

//console.log(arrayMatches)

/*
condicional mal hecha
if (document.getElementById("radioEmpatados")("checked")){
  filterMatches.push (arrayMatches[i].winner.DRAW)

}
----------------------------------------------------
dividir resultados
if (document.getElementById("radioEmpatados").checked == true){
  filtroEmpatados(filterMatches);{
  
  }
}else if  (document.getElementById("radioTodos").checked == true){
  creacionTabla(filterMatches);
}
if (document.getElementById("radioGanados").checked == true){
  filtroEmpatados(filterMatches);{
  
  }
}else if  (document.getElementById("radioPerdidos").checked == true){
  filtroEmpatados(filterMatches);
}
--------------------------------------------------
-




function buscarPartidos() {
  document.getElementById("tbody").innerHTML = ("");
  for (let i = 0; i < dataPartidos.matches.length; i++) {
    if ((dataPartidos.matches[i].awayTeam.name ==
        document.getElementById("inputEquipos").selectedIndex) ||
      (dataPartidos.matches[i].homeTeam.name ==
        document.getElementById("inputEquipos").selectedIndex));
      }
    }
    


document.getElementById("boton_buscar").onclick = function () {
  document.getElementById("tbody").innerHTML = buscarPartidos();
}



function botonEquipo(){

let input_equipo = document.getElementById("inputEquipo");
input_equipo.addEventListener(input_equipo) function () {
  let input_busqueda = input_1.value;


})

}
botonEquipo();
---------------
  let primerValor = parseFloat(input_1.value);
  let segundoValor = parseFloat(input_2.value);
  let resultadoSuma = primerValor + segundoValor;



  document.getElementById("result").innerHTML = resultadoSuma;



*/
