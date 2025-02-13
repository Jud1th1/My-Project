//Challenge 28. For this challenge, create the HTML and CSS on the right. Then write a script that when you hover 
//the mouse over the div, it adds the class "big". Write a second event handler for when the mouse goes off 
//the div, it removes the class "big".

(function(){
    "use strict";
    
    const divTag = document.querySelector('div');

    divTag.addEventListener('mouseover', function(){
        divTag.className="big";
    });

    divTag.addEventListener('mouseout', function(){
        divTag.removeAttribute('class');
    });
}());



