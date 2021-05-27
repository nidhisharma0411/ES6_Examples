for(var i=0; i<5; i++){
   setTimeout(function(){console.log(i)},1000) ;  // Output :- 5 with displaying 5 times
}


for(let i=0; i<5; i++){
    setTimeout(function(){console.log(i)},1000) ;  // Output :- 0,1,2,3,4
    //yha pr hme output m sare 
 }