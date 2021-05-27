// let mySet = Object.create(null);
// mySet.id = 1;
// if(mySet.id){
//     console.log("id exists");
// }


//since by using set we can define the value also
debugger;
let mySet = new Set();//bascially myset hmko length provide krva rha h
let ob1 = {};
let ob2 = {};

let newSet = new Set([1,2,3,4,5,4,4,4]);
console.log(newSet.size);
mySet.add("Hello");
mySet.add(ob1);
mySet.add(ob2);
console.log(mySet.size);

debugger;
let mySet1 = new Set();
let key = {};
mySet1.add(key);
console.log(mySet1.size);
key = null;
console.log(mySet1.size);

debugger;
let set = new WeakSet();
let key1 = {};
set.add(key1);
console.log(set.has(key1));
key1 = null;