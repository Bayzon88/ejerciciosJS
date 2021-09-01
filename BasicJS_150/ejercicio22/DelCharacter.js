let palabra = "alvaro";

let delCharacter = (position) => {
  if (position <= palabra.length) {
    // return palabra.substr(0, position - 1);
    return (
      palabra.substr(0, position - 1) + palabra.slice(position, palabra.length)
    );
  }
};
console.log(delCharacter(1));
