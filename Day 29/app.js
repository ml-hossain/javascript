function abcd (name, age){
    this.name = name;
    this.age = age;
}
abcd.prototype.myName = function(){
    console.log(this.name);
}

const ans1 = new abcd("hossain", 20);
const ans2 = new abcd("rabbi", 10);
