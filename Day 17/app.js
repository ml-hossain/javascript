// method chaining 

let userName = window.prompt(`write your username`);
// userName = userName.trim();
// let capName = userName.charAt(0);
// capName = capName.toUpperCase();
// let lowerName = userName.slice(1);
// lowerName = lowerName.toLocaleLowerCase();
// userName = capName + lowerName;



userName = userName.trim().charAt(0).toLocaleUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(`your name is ${userName}`);
