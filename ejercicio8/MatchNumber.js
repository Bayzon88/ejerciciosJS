let userNumber = prompt("ingrese un numero entre 1 y 10");

let randomNumer = (min, max) => {
  return Math.random() * (max - min) + min;
};
if (userNumber == Math.round(randomNumer(1, 2))) {
  alert("ganaste");
} else {
  alert("perdiste");
}
