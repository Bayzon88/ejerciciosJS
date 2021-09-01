let palabra = "pYalvaro";

let addPy = () => {
  let palabraMinusc = palabra.toLowerCase();

  if (palabraMinusc[0] === "p" && palabraMinusc[1] === "y") {
    return palabra;
  } else {
    return "Py" + palabra;
  }
};
console.log(addPy());
