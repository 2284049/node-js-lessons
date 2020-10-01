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
         return false; // whatever I put as the if condition, it will stop the loop
         // once that condition is met one time
      }
   }
   return true;
}
const answer = mutation(["round", "dnuor"]);
console.log(answer);

// FCC: Basic JavaScript: Accessing Object Properties with Dot Notation
// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
// Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
// Here is a sample of using dot notation (.) to read an object's property:
// var myObj = {
//   prop1: "val1",
//   prop2: "val2"
// };
// var prop1val = myObj.prop1; // val1
// var prop2val = myObj.prop2; // val2
// Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
// Setup
var testObj = {
   hat: "ballcap",
   shirt: "jersey",
   shoes: "cleats",
};

// Only change code below this line

var hatValue = testObj.hat; // Change this line
var shirtValue = testObj.shirt; // Change this line

// FCC: Basic JavaScript: Testing Objects for Properties
// Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

// Example

// var myObj = {
//   top: "hat",
//   bottom: "pants"
// };
// myObj.hasOwnProperty("top");    // true
// myObj.hasOwnProperty("middle"); // false
// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".
function checkObj(obj, checkProp) {
   // Only change code below this line
   if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
   } else {
      return "Not Found";
   }
   // Only change code above this line
}
