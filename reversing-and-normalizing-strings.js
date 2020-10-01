// REVERSING A STRING USING SPLIT
// you can also use SPLIT to separate things into parts (parts of an email, parts of dates)
// You can't reverse strings, but you can reverse arrays.
// Make it an array by splitting it, reverse it, and make it a string again.

const email = "mike@gmail.com";
// use the SPLIT method to make a string an array
// LEAVE THIE SPLIT STRING BLANK - when you leave the split string blank, it will make an array of individual characters
const listOfEmailChars = email.split("");
// return: ["m", "i", "k", "e" etc.]

const todaysDate = "2020-09-11";
const dateParts = todaysDate.split("-");
// console.log(dateParts); returns: [ '2020', '09', '11' ]
// took out the dashes

const year = dateParts[0];
const month = dateParts[1];
const day = dateParts[2];
// console.log(year, month, day); returns: 2020 09 11

const greeting = "hello";
const greetingChars = greeting.split(""); // split turns it into an array of characters
// console.log(greetingChars); returns: [ 'h', 'e', 'l', 'l', 'o' ]
// ***** MAKE A COPY BEFORE YOU REVERSE - USE SPREAD *****
const copyOfGreetingChars = [...greetingChars];
//if you don't use spread, you'll make an array within an array
const reverseGreetingChars = copyOfGreetingChars.reverse();
//console.log(reverseGreetingChars); returns: [ 'o', 'l', 'l', 'e', 'h' ]
//console.log(greetingChars); returns: [ 'h', 'e', 'l', 'l', 'o' ]
const newGreeting = reverseGreetingChars.join("");
//console.log(newGreeting); returns: olleh;

// ***** NORMALIZING STRINGS *****
// lowercase both things & then compare them
const query = "GOOGLE FONTS  ";
const dbEntries = ["Google Fonts", "Google Maps"];
const isInDb = query.toLowerCase().trim() === dbEntries[0].toLowerCase().trim();
if (isInDb) {
   console.log("We found a result!");
} else {
   console.log(`Sorry, couldnt' find anything for your ${query}.`);
}
