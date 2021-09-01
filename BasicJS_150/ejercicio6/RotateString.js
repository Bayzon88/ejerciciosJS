let palabra = "alvaro";

console.log(palabra.split("").reverse().join(""));

// console.log(palabra[0]);
// console.log(palabra.length);

let palabraInvertida = [];
let inicio = palabra.length - 1;
while (inicio > -1) {
  palabraInvertida.push(palabra[inicio]);
  inicio--;
}

console.log(palabraInvertida);
console.log(palabraInvertida.join(""));
