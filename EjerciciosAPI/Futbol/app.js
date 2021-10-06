fetch(
  "https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2020",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "7e888f46d8msh91869b649fc1a00p1cc2bajsn6fb9f204b0e5",
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    checkPlayer(data);
  });

let checkPlayer = (data) => {
  console.log(data.response);

  for (let elemento in data.response) {
    let lastName = data.response[elemento].player.lastname;
    $("#players__select").append(
      `<option value="${lastName}"> ${lastName} </option>`
    );
  }
};
