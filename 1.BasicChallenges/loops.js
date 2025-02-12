/* Loops practice
       //sidenote: a shortcut for i = i+1 is i++
       for(var i = 0; i <= 10; i++){
            console.log(i);
       } */


       // Arrays 
       /* var colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple'];

       for(var i = 0; i < colors.length; i++){
            console.log(colors[i]);
       } */


       // For .. Of Loop (used for arrays)
       /* var food = ["grapes", "cheese", "bread", "olives"];

       for(var eachFoodItem of food){
            console.log(eachFoodItem);
       } */


       //strings
       /* 
       var statement = "A string can be treated like an array";

       for(var i=0; i < statement.length; i++){
            console.log(statement[i]); 
       }

       for(var eachLetter of statement){ //we can also write it as a for..of loop
        console.log(eachLetter); 
       } */


       // While Loop
       var incrementor = 0;
       var text = "";

       while(incrementor < 10){
           text += "The incrementor has gone up to " + incrementor + "\n";  // sidenote \n is new line
           incrementor++;
       }

       // Template Literals: Using backticks in JS along with ${} for variables around your expressions allows you to embed them in your strings:
       while(incrementor < 10){
           text += `The incrementor has gone up to ${incrementor}  \n`;  
           incrementor++;
       }

       //Another example where the expressoon in the second template literal is evaluated on the fly, each time through the loop.
      var i = 1;
      
       while(i < 11){
           text += `The incrementor is ${i}, the incrementor squared is ${i*i}  \n`;  
           i++;
       }

       console.log(text);
