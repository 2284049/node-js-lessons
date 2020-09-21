// The DATE Object

// timestamps name - put an "At" at the end of var name

// these are date OBJECTS, not strings

const lessonCreatedAt = new Date(2020, 8, 11, 19, 42, 0, 500);
// (year, monthIndex, day, hour, min, sec, millisec)
// REMEMBER: month is monthIndex with 0 base, so 8 is September
//console.log(lessonCreatedAt); returns: 2020-09-12T02:42:00.500Z

const loggedAt = Date.now();
// console.log(loggedAt); returns: 1600699706206
// Date.now() is a number

const testedAt = new Date(2020, 9, 12, 6);
// console.log(testedAt); return in a browser console: Mon Oct 12 2020 06:00:00 GMT-0700 (Pacific Daylight Time)

const testedAtAsString = testedAt.toString();
// console.log(testedAtAsString); returns: Mon Oct 12 2020 06:00:00 GMT-0700 (Pacific Daylight Time)

const testedAtAsNum = testedAt.getTime();
// console.log(testedAtAsNum); returns: 1602507600000
// this is for that upcoming date in the future - October 12, 2020 at 6am
// from the new Date above

// creating a new date object of the time right now
const createdAt = new Date(Date.now());
// console.log(createdAt); returns: 1600707512416
const year = createdAt.getFullYear();
// console.log(year); returns: 2020
const month = createdAt.getMonth();
// console.log(month); returns: 8 (Sept is 8 cause 0 based)
const day = createdAt.getDate();
// console.log(day); returns = 21
const hour = createdAt.getHours();
// console.log(hour); returns: 10
const minutes = createdAt.getMinutes();
// console.log(minutes); returns: 15
const seconds = createdAt.getSeconds();
// console.log(seconds); returns: 59
const milliseconds = createdAt.getMilliseconds();
// console.log(milliseconds); returns 856

// If I just want year, month and day
// like: 20200911
// you can't combine them with + because they will be added to each other
// make them strings

const yearPart = String(year);
const monthPart = String(month + 1);
const dayPart = String(day);
if (monthPart.length < 2) {
   let todaysDate = yearPart + "0" + monthPart + dayPart;
   console.log(todaysDate);
} else {
   let todaysDate = yearPart + monthPart + dayPart;
   console.log(todaysDate);
}
