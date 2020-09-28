// FreeCodeCamp: Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

// function bouncer(arr) {
//    let finalArray = [];
//    for (var i = 0; i < arr.length; i++) {
//       if (arr[i]) {
//          finalArray = finalArray.concat(arr[i]);
//       }
//    }
//    return finalArray;
// }

// const finalyArray = bouncer([7, "ate", "", false, 9]);
// console.log(finalyArray);

// // FCC Basic Algorithm Scripting: Repeat a String Repeat a String
// // Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// function repeatStringNumTimes(str, num) {
//    let newString = "";
//    if (num < 1) {
//       newString = "";
//    } else {
//       for (let i = num; i > 0; i--) {
//          // i = 3, as long as i > 0, we go down 1 each time; so 3, 2, 1 =
//          newString = newString.concat(str);
//       }
//    }
//    return newString;
// }

// const newString = repeatStringNumTimes("abc", 3);
// console.log(newString);

// FCC: Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
function mutation(arr) {
   const strTwo = arr[1].toLowerCase();
   const strOne = arr[0].toLowerCase();
   const strTwoChars = strTwo.split("");
   const strOneChars = strOne.split("");
   for (let i = 0; i < strTwoChars.length; i++) {
      if (strOneChars.includes(strTwoChars[i]) === false) {
         return false;
      }
   }
   return true;
}
const answer = mutation(["round", "dnuor"]);
console.log(answer);
