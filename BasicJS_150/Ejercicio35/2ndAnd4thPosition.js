let checkIfExist = (palabra, letra) => {
  if (palabra.search(letra) >= 2 && palabra.search(letra) <= 4) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIfExist("terremoto", "o"));
