let x = 0
for (let i =1; i<=100; i++){
     if (i % 3 === x && i % 5 === x){ 
        console.log ("fizzBuzz")
    }  
   else  if (i % 3 === x) {
        console.log("fizz") 
    }
    else if (i % 5 === x ){
         console.log ("buzz")
        }

    else { 
        console.log(i)
    }
}


