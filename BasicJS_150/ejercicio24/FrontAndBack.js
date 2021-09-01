let palabra = "alvaro";

let addFrontAndBack = () => {
  let palabranueva = palabra.concat(palabra.slice(0, 1));
  palabranueva = palabra.slice(0, 1).concat(palabranueva);
  return palabranueva;
};

console.log(addFrontAndBack());
