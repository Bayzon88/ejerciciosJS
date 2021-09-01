let celsius = document.getElementById("celsius").value;
let farenheit = document.getElementById("farenheit").value;

const convertToF = () => {
  farenheit = celsius * (5 / 9) + 32;
  document.getElementById("farenheit").value = farenheit;
};

const convertToC = () => {
  celsius = ((farenheit - 32) * 9) / 5;
  document.getElementById("celsius").value = celsius;
};
