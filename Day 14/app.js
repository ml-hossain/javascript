let name1 = "   Hossain khan jubaer";


console.log(name1.charAt(2));
console.log(name1.indexOf("o"));
console.log(name1.lastIndexOf("s"));
console.log(name1.length);  
// name1 = name1.trim();
name1 = name1.toUpperCase();
console.log(name1);
name1 = name1.toLowerCase();
console.log(name1);

name1 = name1.repeat(3);
console.log(name1);

let name2 = name1.startsWith("  ");
console.log(name2);

let name3 = name1.endsWith(" ");
console.log(name3);

name1 = name1.includes("")
console.log(name1);

let number = "055/53/776/436";
number = number.replaceAll("/", "");
console.log(number);

number = number.padStart(19, "0")
console.log(number);  

number = number.padEnd(90, "0")
console.log(number);  




