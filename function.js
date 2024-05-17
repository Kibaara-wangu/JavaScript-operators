
// function add (num1 , num2){
//     const sum = num1 + num2;

//     console.log({console:sum});
//     return {return:sum};

// }
// console.log(add(2,3));
// add(4,5);

// // global

// // functin expression
// const subtract = function(num1 ,num2){
//     console.log(num1-num2);
// }
// subtract(20,10);

// // arrow functions
// const multiply = (num1,num2) => console.log(num1 *num2);
// multiply(5,6);

// // IIFEs functions :They are called imediately they are written
// (function (){
//     console.log("Hello")
// })();

// // Hoisting function
// console.log();


// let vowels = ['a','e','I','o','U']

// function checkVowels(vowels,vowel){

//     const vowel = char.toLowerCase()

//     vowels.forEach(i =>{
//       if (i == vowel){
//         console.log(`${i} is a vowel`);
//     }
//     else{
//         console.log(`${i} is not a vowel`)
//     }
// });
    

// }
// checkVowels(vowels,a)




// const studentData = [
//     {name:'joy',score:'99'},
//     {name:'Esther',score:'80'},
//     {name:'Purity',score:'60'},
//     {name:'Wangari',score:'48'},
//     {name:'Ann',score:'90'}
   
//     // Add more student records here
// ];
// function sortScores(data) {
//     return data.sort((a, b) => a.score - b.score);
// }
// console.log(sortScores(studentData));



// class ServiceDue {
//     constructor(mileage, lastServiceMileage) {
//         this.mileage = mileage;
//         this.lastServiceMileage = lastServiceMileage;
//     }

// needsServicing() {
//         return (this.mileage - this.lastServiceMileage) >= 1000;
//     }

// }
// // Create an instance of the ServiceDue class
//  const car1 = new ServiceDue(5500, 4000);

// Check if the car needs servicing
// const isServicingNeeded = car1.needsServicing();

// needsServicing(car1)

// function ServiceDue(mileage, lastServiceMileage){
//     const different = mileage - lastServiceMileage;
//     if(different >= 1000){
//     console.log("Car needs servicing");
//     }
//     else{
//         console.log("car dont need service");
//     }
// }
// ServiceDue(5000, 4200)


class User{
    constructor(username, password){
        this.username = username
        this.password = password
    } 
}
  function  validatePassword(){
    if (this.password.isLower()== false && this.password.isupper() && this.password.isnumber()){
    console.log("true");
    }
    else{
        console.log("false");
    }
}
validatePassword("jane29@")
    
    // const upper = /[A-Z]/.test.password;
    // const lower = /[a-z]/.test.password;
    // const number = /\d\/.test.password;




    


