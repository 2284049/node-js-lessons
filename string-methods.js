const name = "Mike Zetlow "; // if the user adds spaces at beginning/end, you want to "trim"

// trimming spaces
const trimmedName = name.trim();
console.log(`The trimmed name is ${trimmedName}.`);

// if you only wanted to trim the beginning
// you can use name.trimStart() instead of name.trimLeft() - Start is considered more accurate, but Left is still used a lot.
const leftTrimmedName = name.trimLeft();
console.log(`The left trimmed name is ${leftTrimmedName}.`);

// if you only wanted to trim the end
// you can use name.trimEnd() instead of name.trimRight() - End is considered more accurate, but Right is still used a lot.
const rightTrimmedName = name.trimRight();
console.log(`The right trimmed name is ${rightTrimmedName}.`);

const nameLength = trimmedName.length;
console.log(`The length of ${trimmedName} is ${nameLength}.`);

const upperCasedName = trimmedName.toUpperCase();
console.log(`HEY ${upperCasedName}!`);

const lowerCasedName = trimmedName.toLowerCase();
console.log(`shhhhh..... hi ${lowerCasedName}....`);

const email = "Mike@gmailcom";
const lowerCasedEmail = email.toLowerCase();
console.log(`Normalized email address: ${lowerCasedEmail}`);

let birthday = "4/21/1981";

const monthIndex = birthday.indexOf("4"); //looking for the index of "4" string
console.log(
   `The string "4" is found at the ${monthIndex} index of ${birthday}.`
);

// finding the first character in birthday which is at index 0 (0 position)
const firstChar = birthday[0];
console.log(`The first char of ${birthday} is ${firstChar}.`);

const firstSlashIndex = birthday.indexOf("/");
console.log(
   `The first slash in ${birthday} is found at the ${firstSlashIndex} index.`
);

// look for the index of the first slash after index 2
const indexOfSecondSlash = birthday.indexOf("/", 2);
console.log(
   `The second slash in ${birthday} is found at the ${indexOfSecondSlash} index.`
);

// look for the index of the LAST slash
const indexOfLastSlash = birthday.lastIndexOf("/");
console.log(
   `The last slash in ${birthday} is found at the ${indexOfLastSlash} index.`
);

// lastIndexOf is going to go from right to left (end to beginning)
// we are telling it to start at index 3 and go left (including index 3)
const indexOfSecondToLastSlash = birthday.lastIndexOf("/", 3);
console.log(
   `The second to last slash in ${birthday} is found at the ${indexOfSecondToLastSlash} index.`
);

// Challenge: When the user clicks “Let’s go”, display an error message
// if the password contains the local-part
// of the email address entered: All or part of your email address
// cannot be used in your password. Style the input
// with the is-invalid class. Style the error text below it
// with the text-danger class.

const indexOfDash = birthday.indexOf("-");
console.log(`The dash in ${birthday} is found at the ${indexOfDash} index.`);
// this will return -1 because there isn't a dash found in ${birthday}
// the birthday only has slashes

// we are telling it what to search for (a dash in this instance):
const charToSearchFor = "-";
// if "birthday" is searched for the defined character above and has it
if (birthday.indexOf(charToSearchFor) > 0) {
   console.log(`${birthday} has this character in it: ${charToSearchFor}.`);
   // if it doesn't have it:
} else {
   console.log(`${birthday} does not have in it: ${charToSearchFor}`);
}

// we are telling it what to search for (string of "1981"):
const strToSearchFor = "1981"; // put an input value here to search for it
const indexOfStr = birthday.indexOf(strToSearchFor);
console.log(
   `The string of ${strToSearchFor} in ${birthday} is found at the ${indexOfStr} index.`
);
// if "birthday" is searched for the defined character above and has it
if (birthday.indexOf(strToSearchFor) >= 0) {
   console.log(`${birthday} has this in it: ${strToSearchFor}.`);
   // if it doesn't have it:
} else {
   console.log(`${birthday} does not have this in it: ${strToSearchFor}`);
}

// we are telling it what to search for (string of "pizza"):
const secondStrToSearchFor = "pizza";
const indexOfSecondStr = birthday.indexOf(secondStrToSearchFor);
console.log(
   `The string of ${secondStrToSearchFor} in ${birthday} is found at the ${indexOfSecondStr} index.`
);
// if "birthday" is searched for the defined string above
// and it doesn't have it (has an index of -1)
if (birthday.indexOf(secondStrToSearchFor) === -1) {
   console.log(`${birthday} does not have this in it: ${secondStrToSearchFor}`);
} else {
   console.log(`${birthday} has this in it: ${secondStrToSearchFor}.`);
}
// indexOf IS CASE SENSITIVE
// you can make everything lower case first and then search it

// lastIndexOf as well returns -1 index if something isn't found.
// It just searches left to right.

// JavaScript method - slice - search "javascript slice mdn"
// if you want to get a specific part of something - like the month in birthday
birthday = `6/21/1980`; // we can change the birthday, since we gave it "let" earlier
// give everything const until you need to change it
// I want that birthday even it's on character or two characters
// "delimiter" - separates things like the slashes
const delimiter = "/";
const indexOfMonthDayDelimiter = birthday.indexOf(delimiter);
const indexOfDayYearDelimiter = birthday.lastIndexOf(delimiter);
const month = birthday.slice(0, indexOfMonthDayDelimiter);
const day = birthday.slice(
   indexOfMonthDayDelimiter + 1,
   indexOfDayYearDelimiter
);
// without putting in the +1, it was returning "/21" with the slash instead of just 21
const year = birthday.slice(indexOfDayYearDelimiter + 1);
// put +1, so it doesn't include the slash
console.log(`The month in ${birthday} is ${month}.`);
console.log(`The day in ${birthday} is ${day}.`);
console.log(`The year in ${birthday} is ${year}.`);

// check if something exists without returning -1
// using "includes" - doesn't work on all browsers, but indexOf does
// "includes" should always be used in an if (conditional) statement
yearToSearchFor = "1981";
if (birthday.includes(yearToSearchFor)) {
   console.log(
      `The birthday ${birthday} includes the string: ${yearToSearchFor}.`
   );
} else {
   console.log(
      `The birthday ${birthday} does not include the string: ${yearToSearchFor}.`
   );
}
