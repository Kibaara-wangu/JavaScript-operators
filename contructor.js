function person(name, age){
    this. name= name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`);
    }
}