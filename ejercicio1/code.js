function calcular() {
  if (
    document.getElementById("celsius").value == "" &&
    document.getElementById("farenheit").value != ""
  ) {
    let farenheit = document.getElementById("farenheit").value;
    let celsius = (farenheit - 32) * (5 / 9);

    document.getElementById("celsius").value = celsius;
  } else if (
    document.getElementById("celsius").value != "" &&
    document.getElementById("farenheit").value == ""
  ) {
    let celsius = document.getElementById("celsius").value;
    let farenheit = celsius * (9 / 5) + 32;
    document.getElementById("farenheit").value = farenheit;
  }
}

let borrar = () => {
  document.getElementById("celsius").value = "";
  document.getElementById("farenheit").value = "";
};

//Calculadora simple
function botonNumero(valor) {
  document.getElementById("resultado").value =
    document.getElementById("resultado").value + valor;
}

function botonFuncion(operador) {
  document.getElementById("resultado").value =
    document.getElementById("resultado").value + operador;
}
