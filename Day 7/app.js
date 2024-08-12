
// const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease= document.getElementById("decrease");
const number = document.getElementById("number");
let count = "0";


increase.onclick = function (){
    count++;
    number.textContent = count;
}
decrease.onclick = function (){
    count--;
    number.textContent = count;
}
reset.onclick = function (){
    count = 0;
    number.textContent = count;
}

//  increase = document.getElementById("increase").onclick = function(){
//     count++;
//     number =  document.getElementById("number").textContent = count;
// }