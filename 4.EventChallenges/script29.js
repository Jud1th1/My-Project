//Challenge 29. Create the HTML & CSS as shown. Write a script that changes the class on the body tag for each 
//500 pixels the user scrolls. At 500px down the page the body gets class two, and at 1000 it gets class three,
// etc. You can use if/else statements, but try using a switch statement!

(function() {
    "use strict";

    window.addEventListener('scroll', function() {
        let scrollChunk = Math.floor(window.scrollY / 500);
        
        switch (scrollChunk) {
            case 1:
                document.body.className = 'one';  // 500-999px
                break;
            case 2:
                document.body.className = 'two';  // 1000-1499px
                break;
            case 3:
                document.body.className = 'three';  // 1500-1999px
                break;
            case 4:
                document.body.className = 'four';  // 2000-2499px
                break;
            default:
                document.body.className = '';  // Default: no class
        }
    });

})();


