function greetPerson(name){
  let greet;
    if(name === "Chandler"){
      greet = "Hello Chandler";
    }else{
      greet = "Hi there";
    }
    console.log(greet);//yha pe greet pe hume error milegi qki var functional scoped hota h
    //let block scoped hota h
  }
  greetPerson("Chandler");

// yha pe answer isliye same rha qki hmare variable manipulate ho gye the 
  var a=1;
  var b=2;
  if(a===1){
    var a=10;
    var b=20;
    console.log(a);//10
    console.log(b);//20
  }

  console.log(a);//10
  console.log(b);//20


  var a=1;
  var b=2;
  if(a===1){
    var a=10;
    let b=20;//means yha jo value change ho rhi h vo isi block m change rhegi
    console.log(a);//10
    console.log(b);//20
  }

  console.log(a);//10
  console.log(b);//2


  //Basically agr tmne koi variable declare kiya h jo ki let hoga tm use kaise bhi use nhi kr skte before uske 
  //declaration k