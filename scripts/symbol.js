debugger;
let s = Symbol();
console.log(typeof s);

let s2 = Symbol("Test");
let s3 = Symbol("Test");

console.log(s2===s3);//false

//Registery for symbols

let s4 = Symbol.for('RegSymbol');
let s5 = Symbol.for('RegSymbol');

console.log(s4===s5);//true i.e the same registery is created

let fname = Symbol();
let person = {
    [fname]: "Nidhi",
};

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));