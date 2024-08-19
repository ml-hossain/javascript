let textarea = document.querySelector('textarea'); 
let h4 = document.querySelector('h4 span')

textarea.addEventListener('input', function(){
h4.textContent = textarea.value.length;
})
