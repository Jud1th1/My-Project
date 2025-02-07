
    //Challenge 10 - Write a function called hello() that outputs a greeting in the console when the function runs
    /* function hello(){
        console.log("Hello, and welcome");
    }

    hello();
    */


    //____________________________________________________________________________________________________________
    //Challenge 11 - Change hello() so that it takes a parameter, and when you run the function, you pass in the 
    //name of a person and the function outputs the greeting to the console.
    /* function hello(name){
        console.log(`Hello ${name} and welcome`);
    }

    hello("Judith");  */


    //____________________________________________________________________________________________________________
    //Challenge 12 - Add a prompt requesting the user for their name, and assign th result to a variable.
    //Then pass that variable into the hello() function so that the console greets the person by name.
    /* var name = prompt("Please enter your name");
    
    function hello(){
        console.log(`Hello ${name} and welcome`);
    }

    hello(); */


    //____________________________________________________________________________________________________________
    //Challenge 13 - Handle the situation that happens if the user clicks cancel on the prompt, or does not enter 
    // text in the prompt. If the user does on of those two acitons, have the hello() fucntion log to console
    //"You didn't give me your name". Otherwise, have the console log the greeting 
    /* var userName= prompt("Please enter your name");

    function hello(name){
        if(name == null || name == ""){
            console.log("You didn't give me your name");
        }else{
            console.log(`Hello ${name} and welcome`);
        }
    }

    hello(userName); */


    //____________________________________________________________________________________________________________
    //Challenge 14 - Update the hello() function so that it returns a value rather than outputs directly to the console.
    //Then outside the function write a call to the console that logs the greeting returned by the function.
    /* var userName= prompt("Please enter your name");

    function hello(name){
        if(name == null || name == ""){
            return "You didn't give me your name";
        }else{
            return `Hello ${name} and welcome`;
        }
    }
    var greeting = hello(userName);

    console.log(greeting); */

    //or

    /* var userName= prompt("Please enter your name");

    function hello(name){
        var greeting;

        if(name == null || name == ""){
            greeting = "You didn't give me your name";
        }else{
            greeting = `Hello ${name} and welcome`;
        }
        return greeting;
    }   

    console.log(hello(userName)); */
    
   
    //____________________________________________________________________________________________________________
    //Challenge 15 - Add an array of foods and put 3-5 elements in the array. Then make a new function called hospitality();
    //after the hello(); function. The new function will take two parameters, a name and a gift, which will be an array.
    //Have this function run the hello() function and output the result to the console. Then have it loop through 
    //the gift array and offer a gift to the visitor by name and output that to the console. 
    /* var userName= prompt("Please enter your name");
    var foods = ["chocolate chip cookies","cheesecake","ice cream","oreos"];

    function hello(name){
        var greeting;

        if(name == null || name == ""){
            greeting = "You didn't give me your name";
        }else{
            greeting = `Hello ${name} and welcome`;
        }
        return greeting;
    }   

    function hospitality(name, gift){

        console.log(hello(userName));
        for(var i = 0; i <gift.length; i++){
            console.log(`${name}, would you like some ${gift[i]}?`);
        }
    }    

    hospitality(userName, foods);
    */


    //____________________________________________________________________________________________________________
    //Challenge 16 - Add the function that gets random integers from the functions lecture. Update the hospitality()
    //function so that, instead of looping through the whole array, randomly picks one element from the array
    //and offers that to the user.
    /* var userName= prompt("Please enter your name");
    var foods = ["chocolate chip cookies","cheesecake","ice cream","oreos"];

    function hello(name){
        var greeting;

        if(name == null || name == ""){
            greeting = "You didn't give me your name";
        }else{
            greeting = `Hello ${name} and welcome`;
        }
        return greeting;
    } 
    
    function randomInt(min, max){
    // creating a random integer from min and max
    return Math.floor((max - min + 1) * Math.random()) + min;
    }

    function hospitality(name, gift){

        console.log(hello(userName));
        var randomGift = gift[randomInt (0, gift.length-1)];
        console.log(`${name}, would you like some ${randomGift}?`);
    }    

    hospitality(userName, foods); */


    //_____________________________________________EXTRA PRACTICE_______________________________________________________________
    //1. Simple Return:
    //Write a function doubleNumber that takes a number as a parameter and returns the number multiplied by 2. 

    /*  function doubleNumber(num){
        return num * 2;
    }
   
    console.log(doubleNumber(6)); */



    //2. Even or Odd:
    //Write a function called isEvenOrOdd that takes a number as an argument and returns "Even" if the number is even, and "Odd" if it’s odd.

    /* function isEvenOrOdd(num){
        if(num % 2 === 0){
            console.log("Even");
        }else{
            console.log("Odd");
        }
    }

    isEvenOrOdd(94);

    //or using return:
    function isEvenOrOdd(num){
        if(num % 2 === 0){
           return "Even";
        }else{
            return "Odd";
        }
    }

    console.log(isEvenOrOdd(93)); */



    //3. Write a function called checkPositiveOrNegative(num) that returns:
    //"Positive" if the number is greater than 0
    //"Negative" if the number is less than 0
    //"Zero" if the number is exactly 0

    /* function checkPositiveOrNegative(num){
        if (num > 0){
            return "Positive";
        } 
        else if (num < 0){
            return "Negative"
        }else{
            return "Zero"
        }
    }

    console.log(checkPositiveOrNegative(0)); */



    //4. Write a function isLeapYear(year) that checks if a year is a leap year. A leap year is: Divisible by 4, but not divisible by 100, unless it’s also divisible by 400   
    /* function isLeapYear(year) {
        if (year % 400 === 0) {
            return "It's A Leap Year";
        }
        else if (year % 100 === 0) {
            return "It's Not a Leap Year";
        }
        else if (year % 4 === 0) {
            return "It's A Leap Year";
        } 
        else {
            return "It's Not a Leap Year";
        }
    }

    console.log(isLeapYear(2020)); // Should log "It's A Leap Year"
    console.log(isLeapYear(2016)); // Should log "It's A Leap Year"
    console.log(isLeapYear(2017)); // Should log "It's Not a Leap Year" */
    

    //5. Write a function countDown(num) that takes a number as an argument and logs a countdown from that number down to 1. Once it reaches 1, it should log "Blast off!".
    //Use a while loop to accomplish this.
    var i = 1;

    function countDown(num){
        while(num >= 1){
           console.log(num); // Logs the countdown number
           num--;  // Decrease the number by 1
       }
       console.log("Blast off!");  // Once the loop ends, log "Blast off!"
    }

    countDown(10);


