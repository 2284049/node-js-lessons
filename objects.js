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

const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
};
// these are called key value pairs (sometimes property value pairs)
// the left side is called a "label" or a "property" or a "key"
console.log(user);
console.log(user.email); // calling a specific property value from the object

// ADDING NEW PROPERTIES TO THE OBJECT
// make a copy first to prevent mutation of original object
// make a shallow copy
// there's ANOTHER WAY TO COPY down below
const copyOfUser = { ...user }; // use the SPREAD operator just like with an array
copyOfUser.isActive = true; // we created a new property isActive with the value of "true"
copyOfUser.tokenExpiredAt = user.createdAt + 86400000;
copyOfUser.isCoolPerson = true;
copyOfUser.isCoolPerson = false; // you can change this anytime
delete copyOfUser.isCoolPerson; // deletes this property

// ANOTHER WAY TO MAKE A COPY
const copyOfUser2 = Object.assign({}, user); // making an empty object
copyOfUser2.isActive = true; // we created a new property isActive with the value of "true"
copyOfUser2.tokenExpiredAt = user.createdAt + 86400000;
copyOfUser2.isCoolPerson = true;
copyOfUser2.isCoolPerson = false; // you can change this anytime

console.log(user);
console.log(copyOfUser);
console.log(copyOfUser2);
