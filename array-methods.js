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
