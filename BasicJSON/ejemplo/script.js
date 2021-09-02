const objectData = {
  name: "Rick",
  lastName: "Sanchez",
  age: "unknown",
  family: ["Morty", "Beth", "Jerry", "Summer"],
};

let storeData = localStorage.setItem("item1", objectData);
let storeDataJSON = localStorage.setItem("item2", JSON.stringify(objectData));
console.log(storeDataJSON);
console.log(JSON.parse(localStorage.getItem("item2")));

let agregarDatos = () => {
  objetoDatos.nombre.push(document.getElementById("nombre").value);
  localStorage.setItem("nombre", document.getElementById("nombre").value);
  console.log(objetoDatos.nombre);
};

let storage = localStorage.setItem("newItem1", "Item");
