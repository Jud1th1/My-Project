//Challenge 22
//Make an HTML file with a paragraph and a button. When you click the button, make the paragraph turn green.
//For now put <script> tags at the bottom of the page, before the closing </body> tag.

/* var btn = document.querySelector('button');
var paragraphs = document.querySelectorAll('p');

btn.addEventListener('click', function() {
        paragraph.style.color = 'green';
    });
}); */

(function(){
    "use strict";

    const btn = document.querySelector('button');
    const paragraphs = document.querySelectorAll('p');
    
    btn.addEventListener('click', function() {
            paragraph.style.color = 'green';
        });

}());