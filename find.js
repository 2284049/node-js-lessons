// fixing duplicate data

// FIND gives us just the FIRST OBJECT that meets the conditions

const authors = [
   {
      name: "Margaret Atwood",
      books: [{ title: "Oryx and Crake" }, { title: "The Year of the Flood" }],
   },

   { name: "Philip Roth", books: [{ title: "American Pastoral" }] },
   {
      name: "Franz Kafka",
      books: [{ title: "The Castle" }, { title: "The Hunger Artist" }],
   },
   {
      name: "Franz Kafka",
      books: [{ title: "The Castle" }, { title: "The Hunger Artist" }],
   },

   { name: "Philip Roth", books: [{ title: "Sabbath Theater" }] },
];

// if we used FILTER on Philip Roth, we would get an array with 2 objects

// FIND gives us just the FIRST OBJECT that meets the conditions

const query = "philip roth";
const author = authors.find((author) => {
   return author.name.toLowerCase() === query.toLowerCase();
});
// console.log(author);

// finding a DUPLICATE
const duplicateAuthor = authors
   .map((author) => {
      return author.name; // ["Margaret Atwood", "Philip Roth", "Franz Kafka", "Franz Kafka", "Philip Roth"]
   })
   .find((author, index, arr) => {
      return arr.indexOf(author) !== index;
   });
console.log(`The first duplicate author is: `, duplicateAuthor); // returns "Franz Kafka" - the first duplicate

// finding ALL DUPLICATES
const duplicateAuthors = authors
   .map((author) => {
      return author.name;
   })
   .filter((author, index, arr) => {
      return arr.indexOf(author) !== index;
   });
console.log(`All duplicate authors: `, duplicateAuthors);

// TO REMOVE SOMETHING FROM AN ARRAY - YOU NEED THE INDEX OF IT
const duplicateAuthorIndex = authors
   .map((author) => {
      return author.name; // ["Margaret Atwood", "Philip Roth", "Franz Kafka", "Franz Kafka", "Philip Roth"]
   })
   .findIndex((author, index, arr) => {
      return arr.indexOf(author) !== index;
   });
console.log(`Index of first duplicate author: `, duplicateAuthorIndex);
