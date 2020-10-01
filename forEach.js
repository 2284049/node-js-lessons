// we want NO SIDE EFFECTS
// REACT - renders everything as "state"

// *******************************************************
// ********** GO TO VERY BOTTOM FOR BEST METHOD **********
// *******************************************************

const user = {
   id: "a34fd5598",
   email: "mike@gmail.com",
};
user.email = "mikez@gmail.com";
console.log(user);

function getUserId(num) {
   return num;
}
function getUser(callBackToOtherFunction) {
   const userId = callbacktootherfunction(Date.now());
   return {
      name: "mike",
      id: userId,
   };
}

const user2 = getUser(getUserId);
console.log(user2);

const users = [
   {
      name: "Mike",
      isActive: true,
   },
   {
      name: "John",
      isActive: true,
   },
   {
      name: "Michelle",
      isActive: false,
   },
];

// if I wanted just the first name of all the users
// we could use a FOR LOOP
for (let i = 0; i < users.length; i++) {
   // ********** DON'T USE THIS METHOD **********
   console.log(users[i].name);
}

// BETTER METHOD: for each user, give me their first name
// USE THE "FOR EACH" METHOD
// forEach is saying that for every single Object
// in users, we are going to do something

// Here we are using an anonymous function OR (see below)
// we are calling each object in the users object, user:
users.forEach(function (user) {
   // ********** DON'T USE THIS METHOD **********
   console.log(user.name);
});

// OR we can use a fat arrow (an arrow function; you're telling it to do what comes next)
// USE THIS ARROW FUNCTION
// FOR A BUNCH OF ARRAY METHODS
// use this instead of a for loop
users.forEach((user) => {
   // ********** USE THIS METHOD **********
   console.log(user.name);
});

// IF YOU WANT TO SHOW ONLY ACTIVE USERS:
users.forEach(() => {}); // skeleton of an anonymous function
let activeUsers = [];
users.forEach((user) => {
   // for each user in the users list
   if (user.isActive) {
      // if user is active
      activeUsers = activeUsers.concat(user); // add them to the empty array
   }
});
console.log(activeUsers);
