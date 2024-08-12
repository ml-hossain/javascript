
const PI = 3.14159;
let radius ;
let circumference;

document.getElementById("btn").onclick = function (){
    radius = document.getElementById("number").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("get").textContent = circumference + "cm";
}