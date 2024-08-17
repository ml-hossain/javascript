let button = document.querySelector('#button');
let p = document.querySelector('p');

button.addEventListener('click', function(){
    p.style.color = 'red';
})

let imageSwap = document.querySelector('.button');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');

imageSwap.addEventListener('click', function(){
    img1.src = 'https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    img2.src = 'https://plus.unsplash.com/premium_photo-1669357657874-34944fa0be68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D';
});



let submit = document.querySelector('form');
let inputs = document.querySelectorAll('input[type="text"]');
let email = document.querySelector('#email');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

// submit.addEventListener("submit", function(event){
//     event.preventDefault();
//     if(name1.value.trim() == '' ){
//         console.log("hey")

//     }
//     else if(email.value.trim().include == '@'){
//         console.log("name is good")
//     }
// })


submit.addEventListener("submit", function(event){
    event.preventDefault();
    for(let i = 0; i<inputs.length; i++){
        if(inputs[i].value.trim() == ''){
          h2.textContent = "error";
          h2.style.color = "red";
           break;

        }
        else if(email.value.trim().includes('@')) {
            h3.textContent = "";
            h3.style.color = "unset";
        }
        
        else if(!email.value.trim().includes('@')){
            h3.textContent = "please add @ symbol";
            h3.style.color = "green";
            
        }
    
           else{
            h2.textContent = "Form submitted successfully";
            h2.style.color = "unset";
        }
        
    }
})