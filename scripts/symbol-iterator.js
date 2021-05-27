debugger;

let str = "hello";
let arr = [1,2,3];
let num = 5;
let obj = {name: "Nidhi"};

console.log("For String- " + typeof str[Symbol.iterator]); // For String- function
console.log("For array - " + typeof arr[Symbol.iterator]); //For array - function
console.log("For number - " + typeof num[Symbol.iterator]); //For number - undefined
console.log("For Object - " + typeof obj[Symbol.iterator]);//For Object - undefined