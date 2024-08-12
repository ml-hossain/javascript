function are (name, age) {
    console.log(`you are my first crush ${name}`);
    console.log(`you are my first love`);
    console.log(`you are my first poet. you are ${age} years old`);
    console.log(`you are my first enemy`);
    console.log(`you are my first heater`);

}
are("madam", 17);

function xy (x, y){
return x - y;
}

console.log(xy(30,3));


function cy (x, y){
let mins = x + y;
    return  mins;
}

console.log(cy(9,3));

function isValidEmail (email){
if(email.includes("@")){
return true;
}
else{
    return false;
}
}

console.log(isValidEmail("labonnogmail.com"));