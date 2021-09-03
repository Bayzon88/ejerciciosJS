/*Write a JavaScript program to test whether an 
array of integers of length 2 does not contain 1 or a 3.*/

let arrayOfIntegers = [3, 2];

let checkIf1Or3 = (arrayCheck) => {
  if (
    arrayCheck[0] != 1 &&
    arrayCheck[0] != 3 &&
    arrayCheck[1] != 1 &&
    arrayCheck[1] != 3
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIf1Or3(arrayOfIntegers));

//Solucion
function is13(nums) {
  if (nums.indexOf(1) == -1 && nums.indexOf(3) == -1) {
    return true;
  } else {
    return false;
  }
}

console.log(is13([7, 8]));
console.log(is13([3, 2]));
console.log(is13([0, 1]));
