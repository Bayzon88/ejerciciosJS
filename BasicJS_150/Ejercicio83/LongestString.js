/*Write a JavaScript to find the longest 
string from a given array of strings*/

let arrayOfStrings = [
  "Juan Carlos",
  "Roberto Carlos Hernesto",
  "beltrans",
  "caceres",
];

let supportArray = [];
let checkLongest = (arrayStrings) => {
  for (let loop = 0; loop < arrayStrings.length; loop++) {
    supportArray.push(arrayStrings[loop].length);
  }

  for (let loop = 0; loop < supportArray.length; loop++) {
    if (arrayStrings[loop].length == Math.max(...supportArray)) {
      return arrayStrings[loop];
    }
  }
};
console.log(
  "Longest string in array is " +
    '"' +
    checkLongest(arrayOfStrings) +
    '"' +
    " with " +
    Math.max(...supportArray) +
    " characters"
);
