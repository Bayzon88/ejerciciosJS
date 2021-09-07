// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

let isPalindrome = (num) => {
  if (num == reverseNumber2(num)) {
    return true;
  } else {
    return false;
  }
};

let reverseNumber2 = (num) => {
  if (typeof num == "string") {
    return num.split("").reverse().join("");
  } else {
    let numero = JSON.stringify(num);
    return numero.split("").reverse().join("");
  }
};
console.log(isPalindrome(444));
