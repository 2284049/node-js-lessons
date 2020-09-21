const holidays = [
   ["Holiday", "Date", "Is a federal holiday?"],
   ["New Year's Day", 20200101, true],
   ["Martin Luther King, Jr. Day", 20200120, true],
   ["Mike's Birthday", 20200421, false],
   ["Memorial Day", 20200525, true],
   ["Independence Day", 20200704, true],
   ["Labor Day", 20200907, true],
   ["Veterans Day", 20201111, true],
   ["Thanksgiving Day", 20201126, true],
   ["Christmas Day", 20201225, true],
];

// create a list of only federal holidays
let federalHolidays = [];
// this empty array is going to get all the arrays from holidays
// and put it in one big array
// let the index start at 0 index
// as long as the index is <the length of holidays, keep running
// at the end, increment i by 1 (go through all the arrays)
for (let i = 0; i < holidays.length; i++) {
   // this will give us all the arrays in the array:
   // console.log(holidays[i]);
   // if it is a federal holiday....
   const holiday = holidays[i];
   const isFederalHoliday = holiday[2]; // true or false from list
   if (typeof isFederalHoliday === "boolean" && isFederalHoliday) {
      federalHolidays = federalHolidays.concat(holidays[i]);
   }
   // if (isFederalHoliday)  - without the === true if all your data is cleaned up and has true false, it will give you all the true ones
   // !== this means not strictly equal to
   // !== false would grab everything that isn't labeled as true

   // else do nothing, skip it
   // if we wanted to concat, but keep each array in its own array
   // we would do: federalHolidays = federalHolidays.concat([holidays[i]]);
   // with those extra brackets around holidays[]
}
console.log(federalHolidays);

// HERE IS ONE WAY TO DO IT - ** BEST WAY ***
let federalHolidays1 = [];
for (let i = 0; i < holidays.length; i++) {
   const holiday1 = holidays[i];
   const isFederalHoliday1 = holiday1[2];
   if (isFederalHoliday1 === true) {
      federalHolidays1 = federalHolidays1.concat([holidays[i]]);
   }
}
console.log(`First way: `, federalHolidays1);

// SECOND WAY TO DO IT
let federalHolidays2 = [];
for (let i = 0; i < holidays.length; i++) {
   const holiday2 = holidays[i];
   const isFederalHoliday2 = holiday2[2];
   if (typeof isFederalHoliday2 === "boolean") {
      if (isFederalHoliday2) {
         federalHolidays2 = federalHolidays2.concat([holidays[i]]);
      }
   }
}
console.log(`Second way: `, federalHolidays2);

// THIRD WAY TO DO IT
let federalHolidays3 = [];
for (let i = 0; i < holidays.length; i++) {
   const holiday3 = holidays[i];
   const isFederalHoliday3 = holiday3[2];
   if (typeof isFederalHoliday3 === "boolean" && isFederalHoliday3) {
      federalHolidays3 = federalHolidays3.concat([holidays[i]]);
   }
}
console.log(`Third way: `, federalHolidays3);

// Basically, we are searching the arrays in holidays
// and looking at index 2 for a true boolean
// those items are added to the new array

// ** CONVERTING ONE TYPE TO ANOTHER **
String(42);
// I just converted the number 42 to a string.

// ******* 127A FOR LOOKS AND ARRAYS video *******
// Create a list of holiday dates; only the dates from holidays
// stopped the 127A For Loops and Arrays video at 1:03:43 and tried to figure out how I would get just the dates, based on what I know so far:

// My Way:
let holidayDates = [];
for (let i = 0; i < holidays.length; i++) {
   const holiday = holidays[i];
   if (typeof holiday[2] === "boolean") {
      // all I need are the numbers from each array
      // company wants the numbers as strings:
      const numAsString = String(holiday[1]);
      holidayDates = holidayDates.concat(numAsString);
   }
}
console.log(`My holiday dates: `, holidayDates);

// Mike's Way:
const holidayValues = holidays.flat();
console.log(holidayValues);
// this puts all the arrays and their values into one single array
let mikesHolidayDates = [];
for (let i = 0; i < holidayValues.length; i++) {
   const valueInFlatArray = holidayValues[i];
   // all I need are the numbers from each array
   // if the value is a number, concat it with holidayDates
   if (typeof valueInFlatArray === "number") {
      // company wants the numbers as strings:
      const mikesNumAsString = String(valueInFlatArray);
      mikesHolidayDates = mikesHolidayDates.concat(mikesNumAsString);
      // else, skip it
   }
}
console.log(`Mike's holiday dates: `, mikesHolidayDates);

// NESTING LOOPS - my own challenge / lesson
// create a new array with every value doubled from the array with nested arrays
// use this method if you have nested arrays and want to do something to every single value

const startingArrayValues = [
   [1, 2, 3],
   [3, 5, 7],
   [2, 4, 6],
];
let doubledArrayValues = [];
for (let i = 0; i < startingArrayValues.length; i++) {
   for (let j = 0; j < startingArrayValues[i].length; j++) {
      // the code above is selecting every single value in the array, one at a time
      // we are giving each value ${startingArray[i][j]} the variable of ${valueInArray}:
      const valueInArray = startingArrayValues[i][j];
      // we are now doubling every single value in the array by multiplying it by 2
      doubledValue = 2 * valueInArray;
      // we are putting all the doubled values together (concatenating them) in our new array:
      doubledArrayValues = doubledArrayValues.concat(doubledValue);
   }
}
console.log(doubledArrayValues); // this returns: [2, 4, 6,  6, 10, 14, 4, 8, 12]

// note: Mike likes to use i2 instead of j for the nested loop
