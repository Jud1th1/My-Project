//Challenge 24. Change the HTML so that there is a div around one paragraph. Make it so that when you click 
//the button a new paragraph is added to the div, with the text, "A new paragraph" in it.

(function(){
    "use strict";

    const btn = document.querySelector('button');
    const div = document.getElementsByTagName('div')[0];

    btn.addEventListener('click', function(){
        var newParagraph = document.createElement('p');
        newParagraph.textContent = "Here is my new paragraph"; 
        div.appendChild(newParagraph);
    });
}());
