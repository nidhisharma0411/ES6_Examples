let user = "Nidhi";


//this is the example of string template kaise hm string ko use krte h
let greet = `Welcome ${user} to the course of ES2015`;//express m hm port assign krte h tb ye use krte h

let new1 = `Welcom 'single' "double" ${user} to the course of ES2015`; //it prints the qote as it found

console.log(greet);
console.log(new1);

//Basically string literals help krte h multiple lines of string ko print krvane k without using concatenation

let new2 = `Welcome to my home
           hello krishna
           this is my new job`;

console.log(new2);