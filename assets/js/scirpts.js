var sentence = "Better late than never";

//change sentence to uppercase letters
sentence = sentence.toUpperCase();

//checking the length of sentence
var sentenceLenth = sentence.length;

//creating variable to keep hidden sequence
var hiddenSentence = "";

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

//shows sentence after page load
window.onload = showGameBoard;


function showGameBoard() {

    //generating divs for letters
    var trescDiva = "";

    for(i=0; i<25; i++) {
        trescDiva = trescDiva + '<div class="letter">A</div>';
    } 
    document.getElementById("alphabet").innerHTML = trescDiva;
    writeSentence();

    
}

