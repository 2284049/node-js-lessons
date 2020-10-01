// JSON - JavaScript Object Notation

const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
   socialProfiles: [
      // we are going to make an object that
      // is an array of a bunch of objects
      {
         site: "facebook",
         username: "mikez",
         id: "00600782937",
         profilePic: "",
         image: {
            // same image, just different sizes
            small: "small.jpg",
            medium: "medium.jpg",
            large: "large.jpg",
         },
      },
      {
         site: "twitter",
         username: "mikezetlow",
         id: "a4b892cd3",
         thumbnail: "",
      },
   ],
};
const indexOfFacebook = 0;

console.log(user);
console.log(user.socialProfiles[1].username); // this will give us the twitter username
// since twitter is the 2nd socialProfile object at index 1
console.log(user.socialProfiles[0].image.small); // facebook is at index 0 and then we want the image -> small

// IF I WANT TO GET ALL THE INFO ABOVE
// WITHOUT ANY OF IT BEING CUT OF
// AND I CAN USE THE DATE IN OTHER PROGRAMS, LANGUAGES, ETC.
// I CAN JSON.STRINGIFY IT
console.log(JSON.stringify(user)); // returns:
/* returns: {"email":"mike@gmail.com","password":"skywalker83",
"createdAt":1601438708536,"id":"005061",
"socialProfiles":[{"site":"facebook","username":"mikez",
"id":"00600782937","profilePic":"",
"image":{"small":"small.jpg","medium":"medium.jpg","large":"large.jpg"}},
{"site":"twitter","username":"mikezetlow","id":"a4b892cd3",
"thumbnail":""}]}
*/
// We can take all this data and copy/past it to a json file and when we save it, it will make it pretty.

const userAsJson = JSON.stringify(user); // converts JS value to JS string
const userAsObject = JSON.parse(userAsJson); // use this to turn the string into valid JS Object
// console.log(userAsObject);

// ***************************************************
// ****** MAKE A DEEP COPY IF IT'S NESTED DATA *******
// ***************************************************
// Method 1: make a deep copy: copiedObjectName = JSON.parse(JSON.stringify(originalCopyName))
// OR Method 2: create a funciton that automatically creates a deep copy
// OR Method 3: create 2 functions to SAFELY PARSE and make a deep copy

// METHOD 1 of making a deep copy
// copyOfUser3 = { ...user }; // THIS WON'T WORK. IT MAKES A SHALLOW COPY, WHICH ONLY GOES ONE LEVEL DEEP.
copyOfUser3 = JSON.parse(JSON.stringify(user)); // MAKES A DEEP COPY
copyOfUser3.socialProfiles[indexOfFacebook].image.large = "large2.jpg";
console.log(`The old user: `, user.socialProfiles[0]); // the original remains unchanged with large.jpg
console.log(`The new user: `, copyOfUser3.socialProfiles[0]); // the new copy has large.jpg

// METHOD 2 of making a deep copy
// YOU MIGHT CRASH THE WHOLE APP WITH THIS METHOD
// SEE METHOD 3 BELOW
function makeDeepCopy(obj) {
   return JSON.parse(JSON.stringify(obj));
}
copyOfUser4 = makeDeepCopy(user);
copyOfUser4.socialProfiles[indexOfFacebook].image.large = "large3.jpg";
console.log(
   `The new user using the function deep copy method: `,
   copyOfUser4.socialProfiles[0]
);

// METHOD 3 of making a deep copy, the safest way
// break it up into 2 functions
copyOfUser5 = makeDeepCopySafely(user);
if (copyOfUser5 !== undefined) {
   copyOfUser5.socialProfiles[indexOfFacebook].image.large = "large4.jpg";
   console.log(
      `The new user using the 2 function SAFELY PARSE deep copy method: `,
      copyOfUser5.socialProfiles[0]
   );
}
function makeDeepCopySafely(obj) {
   const str = JSON.stringify(obj);
   return safelyParseJson(str);
}
function safelyParseJson(str) {
   try {
      // try do this first (try to parse the string)
      JSON.parse(str);
   } catch {
      // if error, return the string back unparsed
      return str;
   }
   // if we tried it and it worked, do more
   return JSON.parse(str);
}

//
//
//
//

function getEmail() {
   // get the user's email from the input with jQuery
   return "mike@gmail.com";
}

function getPassword() {
   // get the user's password from the input with jQuery
   return "skywalker83";
}

function getCreatedAt() {
   // generate createdAt number, e.g. 20200921
   return Date.now();
}

function getId() {
   // generate id string e.g. 005061
   return "005061";
}
