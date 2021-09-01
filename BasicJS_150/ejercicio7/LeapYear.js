//Calculador de año bisiesto

let isLeapYear = (year) => {
  if (year % 4 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return true;
  } else if (year % 400 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapYear(1908));

//Año en que el 1ro de enero es domingo
let añoInicio = 2017;
let añoFin = 2050;
let diasDomingo = [];

for (let contador = añoInicio; contador < añoFin; contador++) {
  let dia = "January 01, " + contador + " 12:00:00";
  let day = new Date(dia);

  if (day.getDay() == 0) {
    diasDomingo.push(contador);
  }
}
console.log(diasDomingo);
