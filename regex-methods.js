// Regular Expressions
// tech an object in JS
// way of matching patterns in string
// way to search in a string

const regex = /REGEX/gm; // g = global and m = multi-line
//regex101.com

// searching for numbers
/\d/; // searching for all single digit numbers
/\d{4}/; // searching for 4 digit numbers
/wood/; // searching for wood anywhere in string
/\$/; // searching for dollar sign - need to put back slash
/\w/; // searching for "word characters", which is all letters and digits AND UNDERSCORES (no spaces or punctuation)
/\W/; // searching for non-word characters = spaces and punct
/\s/; // spaces
/\S/; // everything but spaces (minus spaces)
/\s{3,}/; // 3 or more spaces together
/\s{3,6}/; // between 3 and 6 spaces

// IF I WANTED PHONE NUMBERS IN THIS FORM ONLY:
// (702) 555-1010  - with no spaces before or any extensions after:
const phonePattern = /^\(\d{3}\)\s\d{3}\-\d{4}$/gm;
// the up carrot ^ means nothing before and $ means nothing after

const userInput = "(702) 555-1234";

// TEST Regex method returns a Boolean (true or false)

const isValidPhone = phonePattern.test(userInput);
console.log(isValidPhone);

const scrapedHtmlText = "<h1>Hello World</h1><p>This is my first webpage</p>";
const tagPattern = /<.*?>/;
const htmlStrings = scrapedHtmlText.split(tagPattern); // split returns an array
console.log(
   htmlStrings.filter((str) => {
      return str !== "";
   })
);

const h1Pattern = /h1/g; // need the g to replace ALL h1
editedHtmlText = scrapedHtmlText.replace(h1Pattern, "p");
console.log(editedHtmlText);

// STRING METHOD .search
const sentence = "      The quick brown fox jumps over the lazy dog.";
// how can we FIND THE FIRST WORD
const wordPattern = /\b/;
const firstWordIndex = sentence.search(wordPattern);
// search is just like .indexOF
console.log(firstWordIndex);

// FCC Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// METHOD 1: No REGEX, split, replace characters, join
function titleCase(str) {
   const lowerCaseString = str.toLowerCase();
   const wordsAsArray = lowerCaseString.split(" ");
   console.log(wordsAsArray); // returns [ "I'm", 'a', 'little', 'tea', 'pot' ]
   const capitalizedWords = wordsAsArray.map((word) => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
   });
   console.log(capitalizedWords); // returns [ "I'm", 'A', 'Little', 'Tea', 'Pot' ]
   return capitalizedWords.join(" ");
}
const example = titleCase("I'm a little tea pot");
console.log(`This is the first capitalized string: `, example); // returns I'm A Little Tea Pot

// METHOD 2: USING REGEX
function titleCase2(str) {
   const lowerCaseString = str.toLowerCase();
   const firstCharInWordPattern = /(^|\s)\S/g;
   editedStr = lowerCaseString.replace(
      firstCharInWordPattern,
      firstCharInWordPattern.toUpperCase()
   );
   return editedStr;
}
const capitalizedString = titleCase("I'm a little tea pot");
console.log(`This is the second capitalized string: `, capitalizedString);

// METHOD 3: split string into words, split words into chars,
// map over each character to return char uppercase or lower case
function titleCase(str) {
   return str
      .split(" ")
      .map((word) => {
         return word
            .split("")
            .map((char, i) => {
               if (i === 0) return char.toUpperCase();
               else return char.toLowerCase();
            })
            .join("");
      })
      .join(" ");
}
console.log(titleCase("I'm a little tea pot"));

// /bugs?/; // the question mark means the s is optional
// both "bug" and "bugs" would light up

// /b[ua]gs?/; // either char in the brackets
// would light up bag, bug, bags, bugs

// /b[a-z]gs?/; // any LOWER CASE char a-z is acceptable in that spot

// IF PASSWORD NEEDS TO BE AT LEAST 9 CHARS, CAN HAVE ANY LETTERS AND NUMBERS AND THESE CHARS: _!#/\\-
// /^[a-zA-Z0-9_!#/\\-]{9,}$/; // need to escape the backslash with another backsplash

// /i./; // period is "wild card" char
// this is saying any i followed by any other character will be highlighted
// for "interesting" - both in's would be highlighted

// if you want the "wild card" zero or more times, use the asterik *
// /i.*/; // i followed by any characters indefinitely
// /i.+/; // means you need 1 or more characters after i and highlights anything after i
// same thing as /i.{1,}/
// /i.?/; // highlights i and one character after it only
