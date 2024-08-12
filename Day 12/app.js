const check = document.getElementById(`check`);
const btn1 = document.getElementById(`btn1`);
const btn2 = document.getElementById(`btn2`);
const btn3 = document.getElementById(`btn3`);
const mainbtn = document.getElementById(`mainbtn`);
const subtext = document.getElementById(`subtext`);
const paymenttext = document.getElementById(`paymenttext`);


mainbtn.onclick = function(){
  check.checked? subtext.textContent = "you":  subtext.textContent = "you not";

let c  = a >= 100? 10: 0;
paymenttext.textContent = (`your total $${a - a * (c/100)}`);
}

let a = 6510;




let age = 0;
let adult = age >= 18? `you are adult`: `you aren't`;
console.log(adult);

