// Write a regular expression to validate an email address and use .test(). Also replace all digits in a string using regex.


//check for email verification
let emailVerfify=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let email1="ashith@gmail.com";
let email2="ashith@gamil";

console.log(emailVerfify.test(email1));
console.log(emailVerfify.test(email2));

//remove digits from string
let stringregex="Ash12it45h 12345";
console.log(stringregex.replace(/\d/g,""));
