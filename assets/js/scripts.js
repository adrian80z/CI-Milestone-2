//vars declarations and initialization
var wordsEasy = [];
var wordsHard = [];
var wordsMedium = [];
var playerChoice = "";
var wordsBank = [];
var getRandomSentence = 0;
var sentence = "";
var sentenceLength = 0;
var hiddenSentence = "";
var incorrectTurns = 0;
var alphabet = "";
var turns = 8;

//game sounds
var winner = new Audio("assets/sounds/tada.wav");
var gameOver = new Audio("assets/sounds/fail.wav");
var correctGuess = new Audio("assets/sounds/yes.wav");
var incorrectGuess = new Audio("assets/sounds/no.wav");

//display content after page load
window.onload = showGameBoard;

//arrays with words with different difficulty level
wordsEasy = ["artist", "arrow", "afro", "apollo", "answer", "awesome", "writer", "baby", "door", "banana", "finger", "fence", "big", "swimming", "pool", "sun", "church", "yo yo", "boy", "bag", "alligator", "mouse", "birthday", "winter", "beach", "tree", "teacher", "king", "telephone", "eye", "water", "jelly", "balloon", "toothbrush", "pants", "mom", "body", "bike", "toilet", "paper", "baseball", "pig", "lawn", "mower", "fire", "school", "belt", "pajamas", "mud", "ice", "cream", "cone", "arm", "drums", "spider", "shark", "seashell", "computer", "grandma", "pillow", "kite", "homework", "ladybug", "bed", "bird", "gum", "book", "dress", "queen", "puppy", "happy", "doctor", "frog", "blanket", , "pen", "sandwich", "boat", "dad", "lunchbox", "ice", "bottle", "elbow", "penny", "broom", "dog", "rose", "picnic", "chair", "duck", "hair", "zoo", "party", "piano", "key", "apple", "chalk", "park", "clock", "pencil", "hill", "flag", "lollipop", "candle", "flower", 'basketball', "hug", "clown", 'mountain', 'nose', "cow", "grow", "grass", "rainbow", "pocket", "grape", "cowboy", "doll", "forehead", "football", "crayon", "desk", "TV", "bedtime", "dump", "truck", "cold", "paint", "ear", "moon"];
wordsMedium = ["ping pong", "snowball", "roof", "fly", "fang", "bicycle", "bear", "cape", "puppet", "piano", "lipstick", "salute", "hula hoop", "penguin", "banana", "peel", "whisper", "popsicle", "Frankenstein", "earthquake", "yo yo", "road", "rain", "alarm", "clock", "dog leash", "chop", "pajamas", "slam", "dunk", "fiddle", "seashell", "jog", "seesaw", "nap", "cheerleader", "blind", "beg", "shopping", "cart", "limbo", "newspaper", "twist", "rhinoceros", "cow", "tickle", "fetch", "violin", "cage", "cello", "braid", "skateboard", "stairs", "trumpet", "mop", "shovel", "money", "soap", "saddle", " wink", "tree", "think"];
wordsHard = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jiujitsu", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays", "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz", "quizzes", "quorum", "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy", "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie"];

// code taken from https://html-online.com/articles/get-url-parameters-javascript/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

//assign player choice depending on button clicked to variable
playerChoice = getUrlVars()["id"];

//variable for storing words array
wordsBank = [];

//selecting appropriate words array from button clicked choice and assign it to wordsBank array
if (playerChoice === "easy") {
    wordsBank = wordsEasy;

} else if (playerChoice === "medium") {
    wordsBank = wordsMedium;

} else if (playerChoice === "hard") {
    wordsBank = wordsHard;
};


// function displays random word from words array
getRandomSentence = Math.floor(Math.random() * wordsBank.length);
sentence = wordsBank[getRandomSentence];

//change sentence to uppercase letters
sentence = sentence.toUpperCase();

//checking the length of sentence
sentenceLength = sentence.length;

//creating variable to keep hidden sentence
hiddenSentence = "";

//looping through string and replacing letters and spaces adequately
for (i = 0; i < sentenceLength; i++) {
    if (sentence.charAt(i) == " ") {
        hiddenSentence = hiddenSentence + " ";
    } else {
        hiddenSentence = hiddenSentence + "-";
    }
}

//attach sentence to div 
function writeSentence() {
    document.getElementById("sentence-board").innerHTML = hiddenSentence;
}

alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function showGameBoard() {

    //generating divs for letters
    var boxContent = "";

    for (i = 0; i < 26; i++) {

        //variable for storing id number for each box element
        var boxNumber = "box" + i;

        boxContent = boxContent + '<div class="letter" id="' + boxNumber + '" onclick="checkLetter(' + i + ')">' + alphabet[i] + '</div>';
        //break line after every seventh element
        if ((i + 1) % 7 == 0) {
            boxContent = boxContent + "<br />";
        }
    }

    document.getElementById("alphabet").innerHTML = boxContent;
    writeSentence();
    drawBase();
}

//add custom method insertLetter() to String Class Object using prototype property
String.prototype.insertLetter = function (index, letter) {
    return this.substr(0, index) + letter + this.substr(index + 1);
}


function checkLetter(num) {

    //setting boolean flag to false
    var correctLetter = false;

    for (i = 0; i < sentenceLength; i++) {
        if (sentence.charAt(i) == alphabet[num]) {
            hiddenSentence = hiddenSentence.insertLetter(i, alphabet[num]);
            // change flag to true if letter is found in sentence
            correctLetter = true;
        }
    }

    if (correctLetter == true) {
        correctGuess.play();
        var boxNumber = "box" + num;
        document.getElementById(boxNumber).classList.add("correct");
        //update game state
        writeSentence();
        document.getElementById(boxNumber).setAttribute("onclick", "null");
    } else {
        incorrectGuess.play();
        var boxNumber = "box" + num;
        document.getElementById(boxNumber).classList.add("incorrect");

        //deactivate onclick function after letter is clicked
        document.getElementById(boxNumber).setAttribute("onclick", "null");

        //turns counter
        document.getElementById("lives").innerHTML = "Turns: " + turns;
        turns--;

        //missed letter counter
        incorrectTurns++;
    }

    //win
    if (sentence == hiddenSentence) {
        correctGuess.muted = true;
        winner.play();
        document.getElementById("message").style.display = "none";
        document.getElementById("alphabet").innerHTML = '<span class="win">Congratulations!!!<br/>Great Job!!!</span> <br/><br/><span class="reset menu-button inner" onclick="window.location.reload()">Play Again?</span><br /><span class="back-menu menu-button"><a href="index.html">Main Menu</a></span>';
    }

    //fail - every missed letter one part of gibbet and person is drawn
    var drawOnCanvas = document.getElementById("draw-gibbet");
    var ctx = drawOnCanvas.getContext("2d");


    if (incorrectTurns == 1) {
        ctx.lineWidth = 20;
        ctx.beginPath(); //vertical bar
        ctx.moveTo(50, 270);
        ctx.lineTo(50, 25);
        ctx.stroke();
    }

    if (incorrectTurns == 2) {
        ctx.lineWidth = 20;
        ctx.beginPath(); //horizontal bar
        ctx.moveTo(29, 25);
        ctx.lineTo(175, 25);
        ctx.stroke();
    }

    if (incorrectTurns == 3) {
        ctx.lineWidth = 10;
        ctx.beginPath(); //cross bar
        ctx.moveTo(50, 80);
        ctx.lineTo(100, 25);
        ctx.stroke();
    }

    if (incorrectTurns == 4) {
        ctx.lineWidth = 5;
        ctx.beginPath(); //line
        ctx.moveTo(150, 30);
        ctx.lineTo(150, 80);
        ctx.stroke();
    }

    if (incorrectTurns == 5) {
        ctx.lineWidth = 3;
        ctx.beginPath(); //head
        ctx.arc(150, 100, 20, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath(); //left eye
        ctx.arc(143, 95, 3.5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath(); //right eye
        ctx.arc(157, 95, 3.5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath(); //mouth
        ctx.arc(150, 103, 9, 0, Math.PI);
        ctx.stroke();
        ctx.beginPath(); //body
        ctx.moveTo(150, 120);
        ctx.lineTo(150, 190);
        ctx.stroke();
    }

    if (incorrectTurns == 6) {
        ctx.lineWidth = 3;
        ctx.beginPath(); //right arm
        ctx.moveTo(150, 135);
        ctx.lineTo(180, 160);
        ctx.stroke();
    }

    if (incorrectTurns == 7) {
        ctx.lineWidth = 3;
        ctx.fillStyle = "white";
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //straight mouth
        ctx.moveTo(140, 108);
        ctx.lineTo(160, 108);
        ctx.stroke();
        ctx.beginPath(); //left arm
        ctx.moveTo(150, 135);
        ctx.lineTo(120, 160);
        ctx.stroke();
    }

    if (incorrectTurns == 8) {
        incorrectGuess.play();
        document.getElementById("message").innerHTML = "Your last chance!!!";

        ctx.lineWidth = 3;
        ctx.beginPath(); //right leg
        ctx.moveTo(149, 188);
        ctx.lineTo(180, 230);
        ctx.stroke();
        ctx.beginPath(); //left eye
        ctx.moveTo(140, 93);
        ctx.lineTo(146, 98);
        ctx.stroke();
        ctx.moveTo(140, 98);
        ctx.lineTo(146, 93);
        ctx.stroke();
        ctx.beginPath(); //right eye
        ctx.moveTo(154, 98);
        ctx.lineTo(160, 93);
        ctx.stroke();
        ctx.moveTo(154, 93);
        ctx.lineTo(160, 98);
        ctx.stroke();
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //sad mouth
        ctx.arc(150, 112, 9, 0, Math.PI, true);
        ctx.stroke();
    }

    if (incorrectTurns == 9) {
        incorrectGuess.muted = true;
        gameOver.play();
        document.getElementById("message").style.display = "none";
        document.getElementById("alphabet").innerHTML = '<span class="fail">Game Over!!!</span> <br/><span class="word"> Correct word is:</span><br/> ' + sentence + ' <br/><br/><span class="reset menu-button inner" onclick="window.location.reload()">Play Again?</span><br /><span class="back-menu menu-button"><a href="index.html">Main Menu</a></span>';

        ctx.lineWidth = 3;
        ctx.beginPath(); //left leg
        ctx.moveTo(151, 188);
        ctx.lineTo(120, 230);
        ctx.stroke();
        ctx.fillRect(138, 90, 24, 24); //cover face
        ctx.beginPath(); //straight mouth
        ctx.moveTo(140, 108);
        ctx.lineTo(160, 108);
        ctx.stroke();
        ctx.beginPath(); //left eye
        ctx.moveTo(140, 93);
        ctx.lineTo(146, 98);
        ctx.stroke();
        ctx.moveTo(140, 98);
        ctx.lineTo(146, 93);
        ctx.stroke();
        ctx.beginPath(); //right eye
        ctx.moveTo(154, 98);
        ctx.lineTo(160, 93);
        ctx.stroke();
        ctx.moveTo(154, 93);
        ctx.lineTo(160, 98);
        ctx.stroke();
    }
}

//function drawing base line where gibbet will be drawn
function drawBase() {
    var drawLine = document.getElementById("draw-gibbet");
    var ctx = drawLine.getContext("2d");

    ctx.fillStyle = "transparent";
    ctx.lineWidth = 3;
    ctx.fillRect(0, 0, 300, 300);

    ctx.beginPath(); //ground
    ctx.moveTo(35, 270);
    ctx.lineTo(265, 270);
    ctx.stroke();
}