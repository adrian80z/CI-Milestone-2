var sentence = "Better";

//change sentence to uppercase letters
sentence = sentence.toUpperCase();

//checking the length of sentence
var sentenceLenth = sentence.length;

//creating variable to keep hidden sequence
var hiddenSentence = "";

var incorrectTurns = 0;

//looping through string and replacing letters and spaces adequately
for(i = 0; i < sentenceLenth; i++){
    if(sentence.charAt(i) == " ") {
        hiddenSentence = hiddenSentence + " ";
    } else {
        hiddenSentence = hiddenSentence + "-";
    }
}

//attach sentence to div 
function writeSentence(){
    document.getElementById("sentence-board").innerHTML = hiddenSentence;
}

//display content after page load
window.onload = showGameBoard;

var alphabet = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P","Q", "R", "S", "T","U","V", "W", "X", "Y", "Z"];

function showGameBoard() {

    //generating divs for letters
    var boxContent = "";

    for(i=0; i<26; i++) {

        //variable for storing id number for each box element
        var boxNumber = "box" + i;

        boxContent = boxContent + '<div class="letter" id="' + boxNumber + '" onclick="checkLetter('+ i +')">'+ alphabet[i] +'</div>';
        //break line after every seventh element
        if((i+1) % 7 == 0) {
            boxContent = boxContent + '<br />';
        }
    } 
    
    document.getElementById("alphabet").innerHTML = boxContent;
    writeSentence(); 
    drawBase(); 
}

//add custom method insertLetter() to String Class Object using prototype property
String.prototype.insertLetter = function(index, letter) {
    return this.substr(0, index) + letter + this.substr(index + 1);
}


function checkLetter(num){

    //setting boolean flag to false
    var correctLetter = false;

    for(i = 0; i < sentenceLenth; i++){
        if(sentence.charAt(i) == alphabet[num]){
            hiddenSentence = hiddenSentence.insertLetter(i, alphabet[num]);
            // change flag to true if letter is found in sentence
            correctLetter = true;
        } 
    }

    if(correctLetter == true) {
        var boxNumber = "box" + num;
        document.getElementById(boxNumber).classList.add("correct");
        //update game state
        writeSentence();
    } else {
        var boxNumber = "box" + num;
        document.getElementById(boxNumber).classList.add("incorrect");

        //deactivate onclick function after letter is clicked
        document.getElementById(boxNumber).setAttribute("onclick", "null");
      
        incorrectTurns++;
        var image= "assets/images/" + incorrectTurns + ".png";
        document.getElementById("hangman").innerHTML = '<img src="' + image + '" alt=""/>'
    }

    //win
    if(sentence == hiddenSentence){
        document.getElementById("alphabet").innerHTML = 'You Won!!! <br/><br/><span class="reset" onclick="window.location.reload()">Play Again?</span>';
    }

    //game over
    if(incorrectTurns == 8) {
        document.getElementById("message").innerHTML = "You've last chance to guess!!!";
    }

    else if(incorrectTurns >= 9) {
        document.getElementById("message").style.display="none";
        document.getElementById("alphabet").innerHTML = 'Game Over!!! <br/> Correct sentence is: '+ sentence +' <br/><br/><span class="reset" onclick="window.location.reload()">Play Again?</span>';
    }  
}

    function drawBase(){
        var drawLine = document.getElementById("drawGibbet");
        var ctx = drawLine.getContext('2d');

        ctx.fillStyle = "#CECCCC";
        ctx.lineWidth=3;
        ctx.fillRect(0, 0, 300, 300);
       
        ctx.beginPath(); //ground
            ctx.moveTo(35,270);
            ctx.lineTo(265,270);
            ctx.stroke();
    }

 