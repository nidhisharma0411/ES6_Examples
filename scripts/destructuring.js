//*********  DESTRUCTURING ARRAY ***********

// let employee = ['Nidhi', 'Sharma', 'Female'];

// let [gender, ...employees] = employee;

// //console.log(fname);
// //console.log(lname);
// console.log(gender);
// console.log(employees);


// ********* DESTRUCTURING OBJECTS **********

let employee = {
    fname: 'Nidhi',
    lname: 'Sharma',
    gender: 'Female'
}; 

let {fname,lname,gender} = employee;

console.log(fname);
console.log(lname);
console.log(gender);