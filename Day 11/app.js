const check = document.getElementById(`check`);
const btn1 = document.getElementById(`btn1`);
const btn2 = document.getElementById(`btn2`);
const btn3 = document.getElementById(`btn3`);
const mainbtn = document.getElementById(`mainbtn`);
const subtext = document.getElementById(`subtext`);
const paymenttext = document.getElementById(`paymenttext`);




mainbtn.onclick = function(){
    if(check.checked){
        subtext.textContent = `you are subscribed`;
    }
    else{
        subtext.textContent = `you are not subscribed`;

    }
  
if(btn1.checked){
    paymenttext.textContent = `you have selected paypal payment method`
}
else if (btn2.checked){
    paymenttext.textContent = `you have selected visa payment method`

}
else if (btn3.checked){
    paymenttext.textContent = `you have selected mastercard payment method`

}
else{
    paymenttext.textContent = `you have to select a payment method`

}
}