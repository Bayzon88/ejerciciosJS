// * Filters for API Connections
let year = 2018;
let availableCup = [
  "wc",
  "bl1",
  "cl",
  "bed",
  "bsa",
  "pd",
  "fl1",
  "elc",
  "ppl",
  "ec",
  "sa",
  "pl",
  "cli",
];

//* API Connections
const COMPETITIONS = "https://api.football-data.org/v2/competitions/";
const BUNDESLIGA = `https://api.football-data.org/v2/competitions/BL1/teams?season=${year}`;

function checkIfCupIsAvailable(cupSearch) {
  // Check if CUP exists
  if (availableCup.indexOf(cupSearch) != -1) {
    console.log("hola");
  } else {
    console.log("no");
  }
}

checkIfCupIsAvailable("bl1");

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
