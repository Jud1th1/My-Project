//Challenge 30. Write a script that changes the class on the body tag based on the key that was pressed.
//If someone presses a different key, give them a nasty alert message. Use the switch statement again.

(function(){
    "use strict";

    const bodyTag = document.querySelector('body');

    document.addEventListener('keydown', function(event){
        
        const keyPressed = event.key.toLowerCase();  // Get the key value and make it lowercase to handle both cases
        console.log('Key pressed:', keyPressed); // Log the pressed key to debug

        switch(keyPressed){
            case 'b': bodyTag.className = "one"; break;
            case 'v': bodyTag.className = "two"; break;
            case 'c': bodyTag.className = "three"; break;
            case 'f': bodyTag.className = "four"; break;
            case 'g': bodyTag.className = "five"; break;
            default: alert("You didn't press one of the specified keys!");
        }
    });
})();



