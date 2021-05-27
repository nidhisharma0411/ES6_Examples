class Person{
    constructor(name){//yha pe hme btana hoga ki hm ek single parameter pe deal kr rhe h
        this.name = name;
        console.log(this.name);
    }
    greet(){}

    static StaticMethod(){
        console.log("Inside static method");
    }
}

let p = new Person("Nidhi");

console.log(typeof Person);
console.log(p.greet === Person.prototype.greet)

Person.StaticMethod();//hm static method ko class name se call kr skte h
//class ek special type of person hoti h 
//prototype bhi function k sath associate hota h

