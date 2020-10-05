// filter is looking for true/false and returning an array
// every and some is going to return true or false

// SOME, EVERY, AND FILTER - all look for TRUE / FALSE

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

const isEveryUserOnFb = users.every((user) => {
   const siteNames = user.socialProfiles.map((profile) => {
      return profile.site; // gives us names of all the profile sites
      // puts in a list called siteNames
   });
   console.log(siteNames);
   return siteNames.includes("facebook");
   // if site === facebook,
   // this user is on facebook, so return true
   // else return false
   // for every single user and checking if EVERY one has that
});
console.log(`Is every user on fb?`, isEveryUserOnFb);

const hasFbUsers = users.some((user) => {
   const siteNames = user.socialProfiles.map((profile) => {
      return profile.site; // gives us names of all the profile sites
      // puts in a list called siteNames
   });
   console.log(siteNames);
   return siteNames.includes("facebook");
   // if site === facebook,
   // this user is on facebook, so return true
   // else return false
   // for every single user and checking if EVERY one has that
});
console.log(`Do we have any fb users?`, hasFbUsers);

// FCC: Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria
// Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
function checkPositive(arr) {
   // Only change code below this line
   const isPositive = arr.every((num) => {
      return num > 0;
   });
   return isPositive;
   // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

// FCC: Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria
// Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.
function checkPositive(arr) {
   // Only change code below this line
   const isPositive = arr.some((num) => {
      return num > 0;
   });
   return isPositive;

   // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
