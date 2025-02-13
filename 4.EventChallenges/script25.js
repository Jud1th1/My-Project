//Challenge 25. Add an additional button that removes the last paragraph from the div.

(function(){
    "use strict";

    const div = document.getElementsByTagName('div')[0];
    const addBtn = document.querySelectorAll('button')[0]; //remember to use All when dealing w/ multiple selectors
    const delBtn = document.querySelectorAll('button')[1];

    addBtn.addEventListener('click', function(){
        let newParagraph = document.createElement('p');
        newParagraph.textContent = "Here is my new paragraph"; 
        div.appendChild(newParagraph);
    });

    delBtn.addEventListener('click', function(){
        let allPs = div.querySelectorAll('p');  // Get only paragraphs within the div
        if (allPs.length > 0){//NOTE: all Ps is a node LIST
            div.removeChild(allPs[allPs.length-1]);
        }
    });
})();








