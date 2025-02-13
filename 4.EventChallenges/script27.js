//Challenge 27. Add a form. When the user submits a number, change the size of the font for the h1 
//to be equal to the number they submitted in pixels. If no number is entered, or something other than 
//a number is entered, alert that the user must enter a number. To make this work you will have to 
//prevent the default behavior for the form submission.

(function(){
    "use strict";

    const h1Tag = document.querySelector('h1');
    const formTag = document.querySelector('form');

    formTag.addEventListener('submit', function(event){
        event.preventDefault();  //Forms have a default behavior of reloading the page on submit. 
        // event.preventDefault() stops this behavior, allowing the script to handle the form submission without refreshing the page.
        let myNum = parseInt(document.querySelector('input').value); //Getting the input value This line grabs the value from the input field (<input>) 
        //and converts it to a number using parseInt(). myNum will contain a number if the input is valid or NaN (Not a Number) if the input is empty or not a number.
        if(myNum){
            h1Tag.style.fontSize = myNum + "px";
        }
        else {
            alert('please enter a number');
        }
    }); 
}());














