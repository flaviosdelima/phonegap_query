//

$(document).ready(function(){
    
    "use strict";
    
    console.log("passou 1");
    
    var mySounds = [new Audio("audio/Chicken_Song.mp3"),new Audio("audio/Dog_dogsong.mp3")];
    
    //a click function for every element with an id that starts with "playclip"
    $("[id^='playClip']").click(function(e){
        
        console.log("passou 2");
        
        var clickID= e.target.id;
        
        var clickNUM = clickID.substr(clickID.length -2);
        
        var arrayIndex = clickNUM - 1;
        
        mySounds[arrayIndex].play();
        
        });
    
    });
