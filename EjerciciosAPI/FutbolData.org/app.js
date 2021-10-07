const COMPETITIONS = "https://api.football-data.org/v2/competitions/";

// ? Informacion de Bundesliga segun el año
let year = 2018;
const BUNDESLIGA = `https://api.football-data.org/v2/competitions/2002/teams?season=${year}`;

function requests(URL) {
  fetch(URL, {
    headers: { "X-Auth-Token": "5dd1d4557b09427cba8b382eacd745c6" },
    dataType: "json",
    type: "GET",
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    });
}

requests(BUNDESLIGA);
