//Challenge 10 - Write a function called hello() that outputs a greeting in the console when the function runs
    /*  function hello (){
        console.log("Hello, and welcome!");    
    }

    hello(); */


    //____________________________________________________________________________________________________________
    //Challenge 11- Change hello() so that it takes a parameter and when you run the function, you pass in the
    //name of a person and the function outputs the greeting to the console
    /* function hello(name){
        console.log(`Hello ${name}, and welcome!`);
    }

    hello("Judith"); */


    //____________________________________________________________________________________________________________
    //Challenge 12- This time add a prompt requesting the user for their name and assign the result to a variable.
    //Then pass that variable into the hello() function so that the console greets the person by name.
    
    /*var userName = prompt("What is your name?");

    function hello(){
        console.log(`Hello ${userName}, and welcome!`)
    }

    hello(userName);*/

    
    //____________________________________________________________________________________________________________
    //Challenge 13- Handle the situation that happens if the user clicks cancel on the prompt, 
    // or does not enter text in the prompt. If the user does one of those two actions, have the hello() function 
    // log to the console "You didn't give me your name." Otherwise have the console log the greeting 
  /*    var userName = prompt("What is your name?");

    function hello(name){
        if(name == null || name == ""){
        console.log(`You didn't give me your name`);
        }else{
            console.log(`Hello ${name}, and welcome!`);
        }
    }  
    
    hello(userName);
 */
