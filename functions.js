console.log("Hello");

// In (pass it) -->

// Do something
// 1. Purely related to the input and output (pure function)
// 2. Or cause and effect elsewhere in the app (a side effect)

// Get something out (return) -->

// Input a string
// Reverse it
// Output that reversed string

// function toReverse(str) {
//    return str[0];
// }
// // const reversedString = toReverse("Hello");
// // console.log(reversedString); return: H

function toReverse(str) {
   if (str === "") {
      throw Error("String cannot be empty.");
      // throw an error if it's a function another developer would use and you don't want them to use it a certain way
   }
   // instead of try and catch, you can do if and else
   try {
      const chars = str.split("");
      // console.log(chars); return: [ 'H', 'e', 'l', 'l', 'o' ]
      const reversedChars = chars.reverse();
      // console.log(reversedChars); return: [ 'o', 'l', 'l', 'e', 'H' ]
      const reversedStr = reversedChars.join();
      // console.log(reversedStr); returns: o,l,l,e,H
      return reversedStr;
   } catch {
      return "Error: there is a problem with toReverse().";
   }
}
const reversedString = toReverse("Hello");
// if I put a string above - like toReverse("Hello"), the function above will run and it will return the string reversed
// if I put a number above - like toReverse(2), the function above will run and return an error, since 2 is not a string
console.log(reversedString);

// given a string and a number
// check the length of the string
// if the length is over the number, return true
// else return false

// if the function is checking a boolean, name it with "check" and then a boolean name starter "is, can, has"
function checkIsOver(str, num) {
   return str.length > num;
   //this is going to be analyzed as true or false
}
const userInput = "Hello World";
// const userInput.val()
const maxChars = 240;
const isOver = checkIsOver(userInput, maxChars);
// console.log(isOver);

if (isOver) {
   // display error message to user
} else {
   // submit the input
}

function checkIsOver2(str, num) {
   // THIS CONSOLE LOG IS A SIDE EFFECT:
   console.log(`String: ${str}\nNumber: ${num}`);
   return str.length > num; //this is going to be analyzed as true or false
}

const userInput2 = "Goodbye World";
// const userInput.val()
const maxChars2 = 240;
const hasError = checkIsOver2(userInput2, maxChars2);
console.log(hasError);

const id = "#char-counter";
const message = "You have exceeded the character limit.";
showError(hasError, id, message);

function showError(hasError, id, message) {
   const errorID = `${id}-error`;
   if (hasError) {
      $(id).show(errorID);
      $(errorID).html(message);
   } else {
      $(id).hide(errorID);
   }
}

// ***** PRACTICE *****

// Task 1: YOU NEED TO RETURN A CERTAIN NUMBER OF CHARACTERS FROM A STRING
function truncateString(str, num) {
   // I want to return the string parts
   // from indexOf(0) to indexOf(num), only when the length of string > num
   // otherwise, return the string
   if (str.length > num) {
      return str.slice(0, num) + "...";
   } else {
      return str;
   }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// TASK 2: YOU NEED TO FIND THE LONGEST WORD IN A STRING
// split a string into its word parts using the split method
// analyze the length of each word
// need a starting point for length to compare the length of the first word to
// (make a variable that is assigned 0 at the beginning)
// to select one word at a time, we need to SPLIT the string into it's individual words that are separated by a space

function findLongestWordLength(str) {
   const words = str.split(" ");
   let lengthOfLongestWord = 0;
   for (let i = 0; i < words.length; i++) {
      const eachWord = words[i];
      if (eachWord.length > lengthOfLongestWord) {
         lengthOfLongestWord = eachWord.length;
      }
   }
   return lengthOfLongestWord;
}

const length = findLongestWordLength(
   "The quick brown fox jumped over the lazy dog"
);
console.log(length);
