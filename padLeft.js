// Given a number (4),
// Pad it with zeroes, until it reaches max chars (up to 3 chars)
// padLeft(4, 3)  4 ==> 004 The number 4 with padded zeroes until we've reach max chars
// 40 ==> 040
// 400 ==> 400
// 4,000 ==> (or return an error, saying the number exceeds the padding)

// ***** IMPORTANT *****
// padded numbers must be returned as strings
// if you convert a padded number string into a number,
// it will get rid of all the zeroes  006 would return as 6 if you converted it to a number

//  THERE ARE 3 WAYS TO PAD LEFT UNTIL A MAX CHARS IS REACHED

// THE BEST METHOD AND SHORTEST (AS WELL AS NEWEST) IS THE padStart() METHOD
// IT'S THE LAST ONE AT THE BOTTOM !!!!!!!!

// FIRST METHOD (USE THE LAST METHOD AT THE BOTTOM)
// At 17:50 of video 133A (Re)Creating PadLeft, I tried to get the correct number of characters on my own, this way:
function padLeft(num, numOfMaxChars, padChar) {
   const numAsStr = String(num);
   const maxWidth = numOfMaxChars - numAsStr.length;
   let padding = "";
   for (let i = 0; i < maxWidth; i++) {
      // in this loop, as long as we are less the number of max characters,
      // the loop will keep running
      padding += padChar;
      // += keep adding this char to the string until the loop reaches the max num of chars
   }
   if (numAsStr.length >= numOfMaxChars) {
      return numAsStr;
   }
   console.log(`Padding: ${padding}`);
   return padding + numAsStr; // returns a string
}

// OR SECOND METHOD USING SLICE (USE THE LAST METHOD AT THE BOTTOM)
// instead of my way, we can Slice and use Mike's way
// We can use slice to tell it which chars we want of the final output
// for instance slice(-2) tells it to return the last 2 characters of the output
console.log("pizza".slice(-2)); // returns za - the last 2 characters
// when slice is given a negative number, add that negative num to the string length, and that's where teh slice starts
// pizza length = 5 + (-2) = it's going to start at index 3

function padLeftUsingSlice(num, numOfMaxChars, padChar) {
   const numAsStr = String(num);
   let padding = "";
   for (let i = 0; i < numOfMaxChars; i++) {
      // in this loop, as long as we are less the number of max characters,
      // the loop will keep running
      padding += padChar;
      // += keep adding a 0 to the padding string until the loop reaches the max num of chars
   }
   const concatenatedStr = padding + numAsStr; // 0000 + 60
   const slicedStr = concatenatedStr.slice(-numOfMaxChars); // 0060
   if (numAsStr.length >= numOfMaxChars) {
      return numAsStr;
   }
   return slicedStr; // returns a string
}
const num = 60;
const maxChars = 4;
const padChar = "*";
const paddedNum = padLeft(num, maxChars, padChar); // 60 ==> 0060, 6 => 0006
console.log(`First method: `, paddedNum);
const paddedNumUsingSlice = padLeftUsingSlice(num, maxChars, padChar);
console.log(`Second method: `, paddedNumUsingSlice);

// THIRD WAY AND EASIEST WAY
const numAsStr2 = String(num);
const newPaddedNum = numAsStr2.padStart(8, "*");
console.log(`Here is your new padded number: `, newPaddedNum);
