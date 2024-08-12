const max = 100;
const min = 50;

let randomNum ;
randomNum = Math.floor(Math.random()* (max - min) +min );
console.log(randomNum);



let btn = document.getElementById("btn");
let text1 = document.getElementById("text1");
const max1 = 6;
const min1 = 1;
let role;

btn.onclick = function(){
role = Math.floor(Math.random() * max1 + min1)
text1.textContent = role ;
}