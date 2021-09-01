let xmas = new Date("December 25, 2021 00:00:00");
let today = new Date("January 27, 2021 00:00:00");
let isXmas = (day, month) => {
  if (day == xmas.getDate() && month - 1 == xmas.getMonth()) {
    return true;
  } else {
    return false;
  }
};

if (today.getDate() > 25 && today.getMonth() == 11) {
  añoXmas = today.getFullYear() + 1;
  let xmas = new Date(añoXmas, 11, 25, 0, 0, 0);
  let daysToXmas = (xmas.valueOf() - today.valueOf()) / 1000 / 60 / 60 / 24;
  console.log(daysToXmas);
  console.log("calcular proximo año");
} else {
  let daysToXmas = (xmas.valueOf() - today.valueOf()) / 1000 / 60 / 60 / 24;
  console.log(daysToXmas);
}

xmas.valueOf() * 1000 * 60 * 60 * 24;
