const priceOfSquirtGun = 3.99;
const floorOfSquirtGun = Math.floor(priceOfSquirtGun);
console.log(`Floor of squirt gun is: ${floorOfSquirtGun}`); // returns 3
const ceilOfSquirtGun = Math.ceil(priceOfSquirtGun);
console.log(`Ceiling of squirt gun is: ${ceilOfSquirtGun}`); // returns 4
// floor = whole number down
// ceiling = whole number up

const roundedPrice = Math.round(priceOfSquirtGun);
console.log(`Rounded price of squirt gun is: ${roundedPrice}`); // returns 4
// rounding the number to nearest whole number

// MINIMUM & MAX NUMBER in a list of numbers (if it's in an array, SPREAD it)
// min = given a list of numbers, show me the smallest
const smallestNum = Math.min(3, 5, 1);
console.log(`The smallest numbnoer is: ${smallestNum}`); // returns 1
const prices = [3.99, 7.99, 0.99];
const lowestPrice = Math.min(prices);
console.log(`The lowest price is: ${lowestPrice}`);
// returns Nan = not a number
// SPREAD it
const lowestPriceAfterSpread = Math.min(...prices);
console.log(`The lowest price after spread is: ${lowestPriceAfterSpread}`);
const highestPrice = Math.max(...prices);
console.log(`The highest price after spread is: ${highestPrice}`);

// RANDOM - gives a lonnnnnng random number between 0 & 1
console.log(`Here is your random number: ${Math.random()}`); // returns 0.8273001380165541

// getting a random number between 2 values with a long decimal
function getRandomArbitrary(min, max) {
   return Math.random() * (max - min) + min;
}
const randomArbitrary = getRandomArbitrary(1, 16);
console.log(`Here is your random arbitrary number: ${randomArbitrary}`); // returns 1.646168620686166

// getting a random INTEGER between 2 values
// make sure you put max + 1 or it won't ever give you the highest integer
function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max + 1 - min) + min);
}
const randomInt = getRandomInt(1, 16);
console.log(`Here is your random integer: ${randomInt}`);

const weirdness = Math.round("pizza");

// CHECK TO SEE IF INPUT IS A NUMBER
const isNaN = Number.isNaN(weirdness);
console.log(isNaN);
// returns true - because it's not a number
// would return false if it is a number

// CONVERTING A STRING TO A NUMBER
// USING NUMBER() IS BETTER THAN USING NUMBER.PARSEFLOAT()
// Number.parseFloat() is the same as parseFloat()
// we can convert a string to a number using just Number()
const convertedNum = Number("3pizza"); // returns NaN not a number
console.log(convertedNum);
// using parseFloat - it will return NaN if the input is not a number or it cannot be computed
const convertedNum2 = Number.parseFloat("3pizza"); // returns 3
console.log(convertedNum2);

// TAKE A LONG DECIMAL AND CUT IT OFF AT A CERTAIN POINT
// it will be rounded
// use Number.toFixed() to return a string
// Use toFixed() if you need to round to a specific decimal place
// OR use Number.round() to return a number - this will round to an integer
// other than that, they do the same thing
const priceOfCup = 3.2555;
function round(num, numOfDecimalPlaces) {
   return Number(Number(num).toFixed(numOfDecimalPlaces));
   // Number(num) - we are getting an input num and converting it into a number
   // .toFixed(NumOfDecimalPlaces) - takes that number and rounds it but returns it as a string
   // Number(around the whole thing) - takes that string and converts it into a number to use operations on
   // toFixed() returns it as a string, so you need another Number() around the whole thing
   // the nested Number is converting what the user inputted into Number form so the toFixed() function will word
}
const roundedPriceOfCup = round(priceOfCup, 2);
console.log(roundedPriceOfCup); // returns 3.26
// I can set the second value to 0 if I just want the rounded integer
console.log(roundedPriceOfCup + 1);
// We can perform operations on this now, since after using toFixed() we wrapped it in Number() to convert the string output to a number output
