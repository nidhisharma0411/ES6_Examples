let firstname = "Nidhi";
let lastname="Sharma";

//yha pe hmne usko btaya ki hmari dono properties k name same h
// let person = {
//     firstname: firstname,
//     lastname: lastname
// };

//if the property and variable name is same then in that case hm usko ek hi value pe deal krvate h
// IN ES2015 we have an option that we can easily find the space between object literal
let person = {
    firstname,
    lastname
}


//now third format ye bolta h ki q na hm ek function create krle

function createPerson(firstname, lastname, age){
    debugger;
   let fullName = firstname + " " + lastname;
   //here we have to write a return statement 
   return {firstname,
    lastname,
    fullName,
    isSenior(){
        return age>50;
    }}
}

let p = createPerson('Nidhi', 'Sharma', 30)
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullName);
console.log(p.isSenior());