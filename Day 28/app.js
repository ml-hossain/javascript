// prototypal inheritance 

function abcd (){
    this.name = "abcd";
    this.age = 23;
    this.eat = function (){
        console.log("abcd is eating");
    }
}

const ans = new abcd();