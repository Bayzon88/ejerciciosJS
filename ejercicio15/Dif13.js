let numero = 32;

let difBetween13 = (numero) => {
  if (numero > 13) {
    return Math.abs((numero - 13) * 2);
  } else {
    return 13 - numero;
  }
};

console.log(difBetween13(numero));
