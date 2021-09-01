let numero = 36;

let multOf3And7 = () => {
  if (numero % 3 == 0 || numero % 7 == 0) {
    return "el numero es multiplo de 3 o 7";
  } else {
    return " el numero no es multiplo de 3 o 7";
  }
};

console.log(multOf3And7());
