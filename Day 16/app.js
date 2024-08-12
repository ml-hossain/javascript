let minNumber = 50;
let maxNumber = 100;
let result = Math.floor(
  Math.random() * (maxNumber - minNumber + 1) + minNumber
);

let attempts = 0;
let guess;
let running = true;
while (running) {
  guess = window.prompt(`enter a number between${minNumber} to ${maxNumber}`);
  guess = Number(guess);

  if (guess > maxNumber || guess < minNumber) {
    window.alert(`please enter a valid number`);
    }
    else if (isNaN(guess)){
      window.alert(`please enter a valid number`);

  }
  else{
    attempts ++;
    if (guess > result){
        window.alert(`You are too high, try again`)
        
        }
        else if (guess < result){
        window.alert(`You are too low, try again`)

    }
    else{
        window.alert(`you are correct the number was ${result}. You took ${attempts} attempts`)
    running = false;
    }
  }
}
