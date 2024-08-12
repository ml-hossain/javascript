let fullName = "hossain khan";
// fullName = fullName.slice(0, 7);
// console.log(fullName);
firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);

lastName = fullName.slice(fullName.indexOf(" ") +1);
console.log(lastName);


let email = "hossain@gmail.com"

let userName = email.slice(0, email.indexOf("@"));
console.log(userName);
let ext = email.slice(email.indexOf("@") +1);
console.log(ext);




