let cardData = {
    img:'https://images.unsplash.com/photo-1720884413532-59289875c3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    title: "amazon forest",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sun"

}


let div = document.createElement('div');
let ans = div.innerHTML = `<div class=" flex flex-col card h-60 w-[27vw] bg-sky-200 rounded">
    <img class="h-[50%] w-full object-cover p-1 rounded-lg" src= "${cardData.img}" alt="">
    <h1 class="pl-1 pr-1 text-sm font-medium uppercase">${cardData.title}</h1>
    <p class="text-xs p-1">${cardData.description}</p>
    <button class="active:bg-violet-500 hover:bg-violet-200 w-[80%] ml-auto mr-auto mb-px mt-px rounded-lg bg-blue-800 text-white p-1 justify-self-center uppercase	">load more</button>
   </div>`;



let ans2 = document.querySelector("body");
ans2.appendChild(div)

document.querySelector('button').addEventListener('click', function(){
    ans2.removeChild(div)
})