
// how to accept user import

// Easy way is = window import
// Professional way = html textbox import

// let userName = window.prompt("what is your user name");
let age;
let fullName ;
document.getElementById("btn").onclick = function () {
   fullName =  document.getElementById("userName").value;
age = document.getElementById("age").value;
    document.getElementById("h1").textContent = `hi ${fullName} you are ${age} years old`;
    
}
