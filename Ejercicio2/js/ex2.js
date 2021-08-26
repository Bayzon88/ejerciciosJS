const diaDeLaSemana = {
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
  7: "Domingo",
};

const dia = new Date();
const day = dia.getDay(); //devuelve dia de la semana
const hora = dia.getHours() % 12;
const minutos = dia.getMinutes();
const segundos = dia.getSeconds();
console.log("Today is: " + diaDeLaSemana[day]);
console.log("Time is: " + hora + ":" + minutos + ":" + segundos);
