        //Challenge 1: 
       /*  var firstName = "Judith";
        var lastName = "Jean-Francois";

        console.log(firstName);
        console.log(lastName); */

        //Challenge 2: Put name on the same line
        /* console.log(firstName + " " + lastName);
        console.log(`${firstName} ${lastName}`); */

        //Challenge 3: Add a variable called "adjective" and assign it a value that describes you. Use the console to display
        //a sentence that a sentence that includes all three variables. Use template literal
        /* var adjective = "loving";

        console.log(`Everybody knows ${firstName} ${lastName} is a ${adjective} cat mom`); */

        //Challenge 4: Write script that prompts the user for their name, and then display asentence in the console that greets 
        //the user by name and welcomes them
        /*var name = prompt("What's your name?", "");
        
        console.log(`Hi ${name}, Welcome!`);*/


        //Challenge 5: Use prompt and ask the ser for a whole number. If they type in a number less than 10, hvae the console 
        // report, "You entered a number smaller than 10", otherwise send "You entered a big number" to the conosole
       /*  var userNumber = prompt("Enter a number", ""); */
        
        /*
        if(userNumber < 10){
            console.log("You entered a number smaller than 10");
        }
        else{
            console.log("You entered a big number!");
        }*/


        //Challenge 6: If the user types anything other than a number the console tells us they entered a big number.
        //Fix that so the console displays a message that says there was an error.

        /*if(userNumber < 10){
            console.log("You entered a number smaller than 10");
        }
        else if(userNumber > 9){
            console.log("You entered a big number!");
        }
        else{
            console.log("Error: please enter a number");
        }*/


        //Challenge 7: If the user types a number less than 10, use a loop to print out the numbers from zero to 9 in the console
        /* if(userNumber < 10){
            console.log("You entered a number smaller than 10");
            for(var i=0; i < 10; i++){
            console.log(`Here is ${i}`);
            }
        }else if(userNumber > 9){
            console.log("You entered a big number!");
        }
        else{
            console.log("Error: please enter a number");
        } */


        //Challenge 8: If the user types a number less than 10, update the loop from the last challenge so that 
        // the console indicates the number the user entered.
        /* var userNumber = prompt("Enter a number", "");
        if(userNumber < 10){
            console.log("You entered a number smaller than 10");
            for(var i=0; i < 10; i++){
                if(i == userNumber){
                    console.log(`Here is ${i} <-----This is your number!`);
                }
                else{
                    console.log(`Here is ${i}`);
                }
            }
        }else if(userNumber > 9){
            console.log("You entered a big number!");
        }
        else{
            console.log("Error: please enter a number");
        }   //This one might need more practice. 
        */

        //Bonus Challenge: Prompt the user for a color, then have the console report if the user typed a 
        // primary color (red, blue, or yellow) or a secondary color (orange, green or purple) or none of these. 
        // Handle the situation for both uppercase and lowercase letters in the color the user types in.
        //HINT: Remember the || means "or"
        var primaryColor = ["red", "blue", "yellow"];
        var secondaryColor = ["orange", "green", "purple"];
        var userColor = prompt("Enter a color").toLowerCase();

        if(primaryColor.includes(userColor)){
            console.log("Nice Choice! You picked a primary color:");
        }else if(secondaryColor.includes(userColor)){
            console.log("Nice Choice! You picked a secondary color:");
        }else{
            console.log("Cool choice, try picking a primary or secondary color next");
        }

        //or:

        if(primaryColor.includes(userColor) || secondaryColor.includes(userColor)){
            console.log("It's a primary or secondary color.");
        }