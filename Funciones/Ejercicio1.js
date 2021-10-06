// 1. Write a JavaScript function that reverse a number.
let num;

let reverseNumber = (num) => {
  let numero;
  let result = 0;
  while (num > 0) {
    numero = num % 10;
    result = result * 10 + numero;
    num = (num / 10) | 0;
  }
  return result;
};

let reverseNumber2 = (num) => {
  let numero = JSON.stringify(num);
  return parseInt(numero.split("").reverse().join(""));
};
console.log(reverseNumber(1256));
