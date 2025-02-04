var red = true;
var blue = false;
var green = null;
var myNum = 5;
var otherNum = 6;
var notNum = "5";
var myValue = notNum - myNum;

//Booleans (true or false) practice
//we know undefined, false, null, 0, NAN (not a number) are all false. Numbers like 1, 100, -100 come up true
/* if(myNum === notNum){
    console.log("the statement is true");
}
else {
    console.log("the statement is false");
} */

var colors = ['red','green','blue','yellow'];
var selectedColor = colors[3];

//Else if practice
/*if(selectedColor == 'red'){
    console.log("the color is red");
}
else if (selectedColor == 'green'){
    console.log("the color is green");
}
else if (selectedColor == 'blue'){
    console.log("the color is blue");
} 
else {
    console.log("the color is yellow");
}  */


//Switch statements practice
/*  switch(selectedColor){
    case "red": console.log("the color is red"); break;
    case "green": console.log("the color is green"); break;
    case "blue": console.log("the color is blue"); break;
    case "yellow": console.log("the color is yellow"); break;
    default: console.log("There was an error!");
} */


/* // Logical operators- && practice 
var goodMood = true;
var gotSleep = true;

if (goodMood && gotSleep){
    console.log("Today is a good day!");
}
else {
    console.log("I am grumpy!")
}  */


// Logical operators- || practice 

var gotBreakfast = true;
var gotLunch = false;
var gotDinner = false;

if(gotBreakfast||gotLunch||gotDinner){
    console.log("things are okay");
}
else{
    console.log("I am STARVING");
}
