/*Write a JavaScript program to check from two 
given integers whether one of them is 8 or their sum or difference is 8.*/

let inTermsOf8 = (first, second) => {
  if (first === 8 || second === 8) {
    return true;
  } else if (first + second === 8) {
    return true;
  } else if (first - second === 8) {
    return true;
  } else {
    return false;
  }
};

console.log(inTermsOf8(4, 3));
