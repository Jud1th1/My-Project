//Challenge 26. For this challenge, change the first paragraph so that it says, "This is paragraph number 1".
//Each time the user presses the add paragraph button, the number at the end of the statement increments.
//When the user clicks the remove paragraph button, it functions as normal, but alerts the user if they try 
//to delete the last paragraph.

(function(){
    "use strict";

    const divTag = document.querySelector('div');
    const btnAdd = document.querySelectorAll('button')[0];
    const btnDelete = document.querySelectorAll('button')[1];
    const numOfPs = 1;

    btnAdd.addEventListener('click', function(){
        numOfPs++;
        let newP = document.createElement('p');
        let pText = document.createTextNode(
            `This is paragraph number ${numOfPs-1}`);
        newP.appendChild(pText);
        divTag.appendChild(newP);
    });

    btnDelete.addEventListener('click', function(){
        if(numOfPs > 1){
            divTag.removeChild(divTag.children[numOfPs-1]);
            numOfPs--;
        }
        else{
            alert("don't delete the last paragraph!");
        }
    });
})();
 