let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let h1 = document.querySelector("h1");
let int;

start.addEventListener("click", function () {
  
  h1.textContent = count = 10;
  int = setInterval(function () {
    count--;
    h1.textContent = count;
    if (count === 0) {
      clearInterval(int);
    }
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(int);
});
