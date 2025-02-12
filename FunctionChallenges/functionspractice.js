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


