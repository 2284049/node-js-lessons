// arrays === lists - have brackets
// you can put anything in the list - other lists, numbers, strings, etc
// give an array a PLURAL name (like days instead of week)
const days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
   "Christmas",
   "New Years",
];
const name = "Mike";
const firstLetter = name[0]; // arrays are 0 based (start with 0)
const firstDayOfTheArr = days[0];
console.log(
   `The first day of the array is ${firstDayOfTheArr} and the first letter of the name is ${firstLetter}. `
);
let lastDayOfArr = days[6]; // not 7, because zero base
console.log(`The last day in this array ${lastDayOfArr}.`);

const daysArrLength = days.length;
console.log(`The lenght of this array of days is ${daysArrLength}`);
// we get 7 here, because lenght is 1 based, not 0 based
// so we need to subtract one to account for this when calling length of an array
lastDayOfArr = days[daysArrLength - 1]; // not 7, because zero base
console.log(`The last day of the array is ${lastDayOfArr}.`);

const holidays = [
   "New Year's",
   "MLK",
   "President's Day",
   "Memorial Day",
   "Independence Day",
   "Labor Day",
   "Columbus Day",
];

// Here we have an array of multiple arrays with different data.
// Holidays, what year they are starting, HR person who decided
const newHolidaysFromHR = [
   ["Veterans Day", 2020, "Megan"],
   ["Thanksgiving", 2020, "Megan"],
   ["Christmas Day", 2020, "Megan"],
];

const firstHolidayOfTheArr = holidays[0];
console.log(
   `The first holiday of the array is ${firstHolidayOfTheArr} and the first letter of the name is ${firstLetter}. `
);
let lastHolidayOfArr = holidays[6]; // not 7, because zero base
console.log(`The last holiday in this array ${lastHolidayOfArr}.`);

const holidaysArrLength = holidays.length;
console.log(`The length of this array of holidays is ${holidaysArrLength}`);
// we get 7 here, because lenght is 1 based, not 0 based
// so we need to subtract one to account for this when calling length of an array
lastHolidayOfArr = holidays[holidaysArrLength - 1]; // not 7, because zero base
console.log(`The last holiday of the array is ${lastHolidayOfArr}.`);

const favoriteHoliday = "Independence Day";
const indexOfIndependenceDay = holidays.indexOf(favoriteHoliday);
console.log(
   `${favoriteHoliday} is found at the ${indexOfIndependenceDay} of the holidays array.`
);

const specificHoliday = "Mike's Birthday";

if (holidays.indexOf(specificHoliday) === -1) {
   console.log(`No, ${specificHoliday} is not a holiday.`);
} else {
   console.log(`Yes, ${specificHoliday} is a holiday.`);
}

const otherSpecificHoliday = "Mike's Birthday";

if (holidays.indexOf(otherSpecificHoliday) === -1) {
   console.log(`No, ${otherSpecificHoliday} is not a holiday.`);
} else {
   console.log(
      `Yes, ${otherSpecificHoliday} is a holiday. It was found at the ${holidays.indexOf(
         otherSpecificHoliday
      )} index in the list of holidays.`
   );
}
// works the same with lastIndexOf, just searches from right to left (end to start)

// INCLUDES method

if (holidays.includes(otherSpecificHoliday)) {
   console.log(
      `Yes, ${otherSpecificHoliday} is a holiday. It was found at the ${holidays.indexOf(
         otherSpecificHoliday
      )} index in the list of holidays.`
   );
} else {
   console.log(`No, ${otherSpecificHoliday} is not a holiday.`);
}
// We are going to replace Columbus Day with Mike's Birthday
const replaceableHoliday = "Columbus Day";
// first we find the index of the replaceable holiday
const indexOfReplaceableHoliday = holidays.indexOf(replaceableHoliday);
console.log(
   `We are going to replace ${replaceableHoliday} at the ${indexOfReplaceableHoliday} index of the holidays list.`
);
// We are making a new list (new array) using the old array
// with the 3 dots and brackets, we are telling it to "spread"
// the old holidays into this new holidays list (array)
// otherwise, our new list will also affect the old list
const newHolidays = [...holidays];
// or do it like this: const newHolidays = Array.from(holidays);

// We are telling it to set the index of the holiday we want to replace
// with the holiday we want to add to that index spot
newHolidays[indexOfReplaceableHoliday] = otherSpecificHoliday;
console.log(`Here's a list of our old holidays:\n `, holidays);
console.log(`Here's a list of our new holidays:\n `, newHolidays);
// we worded it like this to get the list presented like an array
// the \n tells it to do a new line there

console.log(`Here's a list of our new holidays:\n `, newHolidaysFromHR);

// CONCATONATING - putting two things together
const allHolidays = newHolidays.concat(newHolidaysFromHR);
console.log(`Here's a list of all holidays:\n `, allHolidays);
// This will give us all the arrays in a list together,
// but they are still separated by brackets and have extra info we don't need
// you can also do it this way:
const allHolidays2 = [...newHolidays, ...newHolidaysFromHR];
console.log(`Here's a list of all holidays:\n `, allHolidays2);

// we need to FLAT the array
// it will get rid of nested arrays
const allFlatHolidays = allHolidays.flat();
console.log(`Here's a list of all flat holidays:\n `, allFlatHolidays);

// a SET will return only unique things from an array (list)
const allUniqueHolidays = [...new Set(allFlatHolidays)];
console.log(`Here's a list of all unique holidays:\n `, allUniqueHolidays);

// we are going to "slice" out the stuff we want to keep
// in sections
// and then concatonate it
// SLICE INCLUDES THE START INDEX, BUT NOT THE END INDEX
const firstHolidays = allUniqueHolidays.slice(0, 8);
console.log(`Here are the first holidays:\n `, firstHolidays);
const secondHolidays = allUniqueHolidays.slice(10);
// the second group, we can just put 10 and it will go from index 10 to the end
console.log(`Here are the second holidays:\n `, secondHolidays);
// You can use INDEXOF instead
const firstIndexOfHolidays = allUniqueHolidays.slice(
   0,
   allUniqueHolidays.indexOf(2020)
);
console.log(`Here are the first holidays:\n `, firstIndexOfHolidays);
const secondIndexOfHolidays = allUniqueHolidays.slice(
   allUniqueHolidays.indexOf("Thanksgiving")
);
console.log(`Here are the second holidays:\n `, secondIndexOfHolidays);

// FINAL LIST USING CONCATINATE
const allTrimmedHolidays = firstHolidays.concat(secondHolidays);
console.log(
   `At long last, here is the final list of holidays:\n`,
   allTrimmedHolidays
);
// FINAL LIST USING SPREAD METHOD
const allCleanedUpHolidays = [...firstHolidays, ...secondHolidays];
console.log(
   `At long last, here is the final list of holidays:\n`,
   allCleanedUpHolidays
);

// combine 2 lists of fruit into one list
// remove items that are not fruits

const firstFruits = ["apple", "pear", "ball", "banana"];
console.log(`Here's a list of the first fruits:\n`, firstFruits);
const secondFruits = ["peach", "strawberry", "stick", "apple", "kiwi"];
const allFruits = firstFruits.concat(secondFruits);
console.log(`Entire list of fruits:\n`, allFruits);
const allUniqueFruits = [...new Set(allFruits)];
console.log(`Here's a list of all unique fruits:\n `, allUniqueFruits);

const firstSliceOfFruits = allUniqueFruits.slice(
   0,
   allUniqueFruits.indexOf("ball")
);
console.log(`Here is the first slice of fruits:\n `, firstSliceOfFruits);
const secondSliceOfFruits = allUniqueFruits.slice(
   allUniqueFruits.indexOf("banana"),
   allUniqueFruits.indexOf("stick")
);
console.log(`Here is the second slice of fruits:\n `, secondSliceOfFruits);
const thirdSliceOfFruits = allUniqueFruits.slice(
   allUniqueFruits.indexOf("kiwi")
);
console.log(`Here is the third slice of fruits:\n `, thirdSliceOfFruits);

const allCleanedUpFruits = firstSliceOfFruits.concat(
   secondSliceOfFruits,
   thirdSliceOfFruits
);
console.log(
   `At long last, here is the final list of fruits:\n`,
   allCleanedUpFruits
);

// LOOPS - How to target a batch of stuff

// ONE WAY TO SEPARATE LOCAL PART OF EMAIL
// USING DELIMITER & SLICE METHOD
// const delimiter = "@";
// const indexOfEmailAtDelimiter = trimmedAndLowerCasedEmail.indexOf(delimiter);
// const localPartEmail = trimmedAndLowerCasedEmail.slice(0, indexOfEmailAtDelimiter);
// console.log(
//    `This is the user inputted local part of email: ${localPartEmail}`
// );
// const localPartEmailLength = localPartEmail.length;
// console.log(`The lenght of the local part of the inputted email is: `, localPartEmailLength);

// SECOND WAY TO SEPARATE LOCAL PART OF EMAIL
// USING SPLIT METHOD

const emailParts = email.split("@"); // ["mike", "gmail.com"]
const localPartEmail = emailParts[0]; // "mike"
