const users = [
   {
      name: "Mike",
      isActive: true,
      createdAt: 1601666436933,
      socialProfiles: [
         {
            site: "twitter",
            username: "mzetlow",
         },
         {
            site: "facebook",
            username: "mikezetlow",
            profilePhoto: {
               sm: "small.jpg",
               lg: "large.jpg",
            },
         },
      ],
   },
   {
      name: "John",
      isActive: true,
      createdAt: 1601666436943,
      socialProfiles: [
         {
            site: "facebook",
            username: "jsmith",
            profilePhoto: {
               sm: "small.jpg",
               lg: "large.jpg",
            },
         },
      ],
   },
   {
      name: "Michelle",
      isActive: false,
      createdAt: 1601666436953,
      socialProfiles: [
         {
            site: "twitter",
            username: "michelledoe",
         },
      ],
   },
];

// YOU CAN CHAIN ARRAY METHODS
// Just like how we would chain string methods:
const name = "Mike".trim().toLowerCase();
console.log(name);

// I just want the user name and facebook username
// We are doing a map to get each user's facebook username
// Some will be blank (no facebook)
// then we filter that map to take out the empty fb usernames
const fbUsers = users
   .map((user) => {
      const newUser = {
         name: user.name,
         fbName: getFbNamesUsingFP(user),
      };
      return newUser;
   })
   .filter((user) => {
      return user.fbName !== "";
   });

console.log(fbUsers);

// ONE WAY TO DO IT - WITH FOREACH
function getFbName(user) {
   let fbName = ""; // forEach doesn't return anything, so we need to create an empty string
   user.socialProfiles.forEach((profile) => {
      if (profile.site === "facebook") {
         fbName = profile.username;
      }
   });
   return fbName;
}

// SECOND WAY TO DO IT -
function getFbNamesUsingFP(user) {
   const fbProfiles = user.socialProfiles.filter((profile) => {
      return profile.site === "facebook";
   });
   if (fbProfiles.length > 0) {
      return fbProfiles[0].username;
   }
   return "";
}

// FCC: Functional Programming: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].
// Note: Your function should not use any kind of for or while loops or the forEach() function.
const squareList = (arr) => {
   // Only change code below this line
   return arr
      .filter((num) => {
         return Number.isInteger(num) && num > 0;
      })
      .map((num) => {
         return (num = num * num);
      });
   // Only change code above this line
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
