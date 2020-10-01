// Properties and Keys are the same thing
// (left side of stuff from an object)

const memoryCard = {
   answer: "The technical term for a hastag is octothorpe.",
   createdAt: 16002989,
   cardId: "53c2bbc6",
   imagery: "Jim Thorpe has octopus arms and is cooking hash browns.",
   lastAttemptAt: 31338,
   level: 1,
   nextAttemptAt: 40086,
   totalSuccessfulAttempts: 1,
   userId: "83f6ec7f",
};

const keys = Object.keys(memoryCard); // just getting the left side stuff
console.log(keys);

const values = Object.values(memoryCard); // just getting the left side stuff
console.log(values);

// HOW TO TEST IF AN OBJECT HAS A CERTAIN PROPERTY
// IMPORTANT: properties are case sensitive
const hasAnswerProp = memoryCard.hasOwnProperty("answer");
// we are asking if the memory card object has a property of "answer"
console.log(hasAnswerProp);

const hasFirstNameProp = memoryCard.hasOwnProperty("firstName");
console.log(hasFirstNameProp);
