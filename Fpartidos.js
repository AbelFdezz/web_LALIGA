let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);


let row1 = document.createElement('tr' );
let head1 = document.createElement('th');
head1.innerHTML = "Equipo Local.";
let head2 = document.createElement('th');
head2.innerHTML = "Goles local";
let head3 = document.createElement('th');
head3.innerHTML = "Goles visitante";
let head4 = document.createElement('th');
head4.innerHTML = "Equipo visitante";

row1.appendChild(head1);
row1.appendChild(head2);
row1.appendChild(head3);
row1.appendChild(head4);
thead.appendChild(row1);




for (let i = 0; i < dataPartidos.matches.length; i++) {
 let row = document.createElement ("tr");
 let equipoLocal = document.createElement("td");
 let golesLocal = document.createElement("td");
 let golesVisitante = document.createElement("td");
 let equipoVisitante = document.createElement("td");

 row.appendChild(equipoLocal);
 row.appendChild(golesLocal);
 row.appendChild(golesVisitante);
 row.appendChild(equipoVisitante);
tbody.appendChild(row);

equipoLocal.innerHTML = dataPartidos.matches[i].homeTeam.name;
golesLocal.innerHTML = dataPartidos.matches[i].score.fullTime.homeTeam;
golesVisitante.innerHTML = dataPartidos.matches[i].score.fullTime.awayTeam;
equipoVisitante.innerHTML = dataPartidos.matches[i].awayTeam.name;
    }














        /*
        let newrow = document.createElement('tr');
        newrow.innerHTML = "`<td>${dataPartidos.matches[i].homeTeam.name}</td>  <td>${dataPartidos.matches[i].score.fullTime.homeTeam}</td> <td>${dataPartidos.matches[i].score.fullTime.awayTeam}</td><td>${dataPartidos.matches[i].awayTeamTeam.name}</td`"
        document.getElementById('tbody').appendChild(table);
    
 
    /*
    let head2 = document.createElement('th');
        head2.innerHTML = "Goles local";
        let head3 = document.createElement('th');
        head3.innerHTML = "Goles visitante";
        let head4 = document.createElement('th');
        head4.innerHTML = "Equipo visitante";
        
}

/*



let hilera1 = `<td>${dataPartidos.matches[i].homeTeam.name}</td>`;
        let hilera2 = `<td>${dataPartidos.matches[i].score.fullTime.homeTeam}</td>`;
        let hilera3 = `<td>${dataPartidos.matches[i].score.fullTime.awayTeam}</td>`;
        let hilera4 = `<td>${dataPartidos.matches[i].awayTeamTeam.name}</td>`;
        
      tableBody.innerHTML = `<tr>${hilera1 + hilera2 + hilera3 + hilera4}</tr>`;
for (let i = 0; i < dataPartidos.matches.length; i++){


}



/*

for (let i = 0; i < dataPartidos.matches.length; i++){
    console.log(dataPartidos.matches[i].score.fullTime.homeTeam);
    console.log(dataPartidos.matches[i].homeTeam.name)

}


/*
//console.log(dataPartidos.matches[40].score.fullTime.homeTeam); //goles casa
//console.log(dataPartidos.matches[40].score.fullTime.awayTeam); //goles visitante
//console.log(dataPartidos.matches[40].homeTeam.name) // equipo visitante
//console.log(dataPartidos.matches[40].awayTeam.name) // equipo visitante



//console.log(dataPartidos)
*/