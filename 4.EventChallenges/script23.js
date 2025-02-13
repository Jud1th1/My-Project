//Challenge 23. Add a few more paragraphs. When you click the button, all the paragraphs turn green.

/*var btn = document.querySelector('button');
var paragraphs = document.querySelectorAll('p');

btn.addEventListener('click', function(){
    for(var i=0; i<paragraphs.length; i++){
     paragraphs[i].style.color = 'green'
     };
   }); 
 
 //or
 /* btn.addEventListener('click', function() {
     paragraphs.forEach(function(paragraph) {
         paragraph.style.color = 'green';
     });
 }); */

(function(){
    "use strict";

    const pTags = document.querySelectorAll('p');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function(){
        for(let i=0; i<pTags.length; i++){
            pTags[i].style.color = "green";
        };
    });

}());