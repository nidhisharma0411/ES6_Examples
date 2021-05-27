// let DisplayColors = function(){
//     console.log(message);
//     for(let i in arguments){
//         console.log(arguments[i]);
//     }
// }

// let message = "list of colors";
// DisplayColors(message,'Red');// here the message is the part of both method and arguments so it displays twice
// DisplayColors(message,'Red','Blue');
// DisplayColors(message,'Red','Blue','Green');

//SYNTAX FOR REST OPERATOR OR REST PARAMETER

let DisplayColors1 = function(message, ...colors){
    //by using ...colors we can easily make the list or colors to array
    console.log(message);
    console.log(colors);//this lines displays the array of colors
    for(let i in colors){
        console.log(colors[i]);
    }
}

let message = "list of colors";
DisplayColors1(message,'Red');// here the message is the part of both method and arguments so it displays twice
DisplayColors1(message,'Red','Blue');
DisplayColors1(message,'Red','Blue','Green');



//Rest operator same hota h spread opeartor k but rest operator function decalartion k time use hota h
//jbki spread operator function calling k time use hota h


let colorsArray = ['Orange','Yellow','Red'];
DisplayColors1(message, ...colorsArray);

