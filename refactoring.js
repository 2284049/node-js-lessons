// when the user submits on sign up
const message = getEmailError(email);

// if there is an email error // if message !== blank
showErrorValidation("#email-error-id-here", message);
// pass the email error id and the message from getEmailError

// if there is an password error e.g. if message !== blank
showErrorValidation("#password-error-id-here", message);
// pass the password error id and the message from getPasswordError

function getEmailError(email) {
   // check the user email input against all validation
   // if email is blank,
   // return Please enter your email address.
   // else return ""
}

function showErrorValidation(id, message) {
   // user jQuery to toggle the error message and error styling
}

function getPasswordError(password) {
   // check the user password input against all validation
   // if password is blank,
   // return Please create a password.
   // if password is less than 9 characters.
   // return Your password must be at least 9 characters.
   // if password contains part or all of the local-part of email
   // return "All or part of your email cannot be used in your password."
   // if password contains an unacceptable password
   // return "Your password contains a commonly used password, "", and can be easily discovered by attackers. Please use something else."
   // else return ""
}
