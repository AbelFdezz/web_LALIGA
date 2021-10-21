function filtroEmpatados(filterMatches) {
let empatadosMatches =[];
  for (let i = 0; i < filterMatches.length; i++) {
    if ( filterMatches[i].score.winner == "DRAW") {
    empatadosMatches.push(filterMatches[i]);
    }
  }
  creacionTabla(empatadosMatches);
}

function filtroGanados(filterMatches) {
    let ganadosMatches =[];
      for (let i = 0; i < filterMatches.length; i++) {
        if (( filterMatches[i].score.winner == "AWAY_TEAM") &&  (filterMatches[i].awayTeam.name == document.getElementById("inputEquipos").value)){
        ganadosMatches.push(filterMatches[i])
        } else if(( filterMatches[i].score.winner == "HOME_TEAM") &&  (filterMatches[i].homeTeam.name == document.getElementById("inputEquipos").value)){
            ganadosMatches.push(filterMatches[i])
        }
        }
        console.log(ganadosMatches)
      creacionTabla(ganadosMatches);
    }

    function filtroPerdidos(filterMatches) {
        let perdidosMatches =[];
          for (let i = 0; i < filterMatches.length; i++) {
            if (( filterMatches[i].score.winner == "AWAY_TEAM") &&  (filterMatches[i].homeTeam.name == document.getElementById("inputEquipos").value)){
            perdidosMatches.push(filterMatches[i])
            } else if(( filterMatches[i].score.winner == "HOME_TEAM") &&  (filterMatches[i].awayTeam.name == document.getElementById("inputEquipos").value)){
                perdidosMatches.push(filterMatches[i])
            }
            }
            console.log(perdidosMatches)
          creacionTabla(perdidosMatches);
        }
        function filtroProximos(filterMatches) {
            let proximosMatches =[];
              for (let i = 0; i < filterMatches.length; i++) {
                if ( filterMatches[i].status == "SCHEDULED") {
                proximosMatches.push(filterMatches[i]);
                }
              }
              creacionTabla(proximosMatches);
            }
