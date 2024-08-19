let add = document.querySelector('.add');
let remove = document.querySelector('.remove');
let ul = document.querySelector('ul');
let input = document.querySelector('input');
let body = document.querySelector('body');
let h1 = document.createElement('h4');
let li; 




add.addEventListener('click', function(){
    if(input.value.trim() === ""){
    //    h1.textContent = 'Right something please';
    //    body.appendChild(h1);
    }
    else{
       li = document.createElement('li');
       li.textContent = input.value;
       ul.appendChild(li);
       input.value = '';
    }
})


remove.addEventListener('click', function(){
  ul.removeChild(li);

})
