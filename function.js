
function add (num1 , num2){
    const sum = num1 + num2;

    console.log({console:sum});
    return {return:sum};

}
console.log(add(2,3));
add(4,5);

// global

// functin expression
const subtract = function(num1 ,num2){
    console.log(num1-num2);
}
subtract(20,10);

// arrow functions
const multiply = (num1,num2) => console.log(num1 *num2);
multiply(5,6);

// IIFEs functions :They are called imediately they are written
(function (){
    console.log("Hello")
})();

// Hoisting function
console.log();