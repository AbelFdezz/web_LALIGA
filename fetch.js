/*
let api = "2b079ae1015a4bfa963e25658fd610e9";
let url = "https://api.football-data.org/v2/competitions/2014/matches";

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

  })
  .then(function (data) {
init(data);
  })
  .catch(function (err){
      console.error(err);     
  });
 function init(data){
      creacionTabla(dataPartidos)
      }
  function creacionTabla(partidos){
    console.log(partidos)
  }
  

*/