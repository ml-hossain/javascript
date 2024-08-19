let downloadpro = document.querySelector('.downloadpro');
let downloadbar = document.querySelector('.downloadbar');
let h1 = document.querySelector('h1');


let count = 0;

var prog = setInterval(function(){
  count++;
  downloadpro.style.width = count+'%'
  if(count === 100){
    clearInterval(prog);
    h1.style.opacity = 1;
  }
},50)