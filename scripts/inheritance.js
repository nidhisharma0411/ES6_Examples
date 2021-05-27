class Person{
    constructor(name){
        console.log(name + "Inside the person constructor");
    }
}

class Employee extends Person{
    constructor(name){
      //basically here we use the super keyword because in the parent class we already have the constructor
        console.log(name + "child class");
        super(name);
    }  
}

let employee = new Employee("Nidhi"); //mtlb agr child class m kch nhi bhi h or parent class m to child class ka object us value ko display kr skta hota h