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

var alphabet = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P","Q", "R", "S", "T","U","V", "W", "X", "Y", "Z"];

function showGameBoard() {

    //generating divs for letters
    var trescDiva = "";

    for(i=0; i<25; i++) {
        trescDiva = trescDiva + '<div class="letter">'+ alphabet[i] +'</div>';
        if((i+1) % 5 == 0) {
            trescDiva = trescDiva + '<div style="clear:both;"</div>';
        }
    } 
    document.getElementById("alphabet").innerHTML = trescDiva;
    writeSentence();

    
}

