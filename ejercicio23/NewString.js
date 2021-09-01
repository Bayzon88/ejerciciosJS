let palabra = "tr";

//Remove first and last character

let firstAndLast = () => {
  if (palabra.length > 2) {
    return palabra.substr(1, palabra.length - 2);
  } else {
    return "word length must be higher than 2";
  }
};

console.log(firstAndLast());
