let number = 9;

function dif19(number) {
  if (number > 19) {
    return Math.abs(number - 19) * 3;
  } else {
    return 19 - number;
  }
}

console.log(dif19(number));
