var sentence = "Better late than never";


//attach sentence to div 
function write_sentence(){
    document.getElementById("sentence-board").innerHTML = sentence;
}

//shows sentence after page load
window.onload = write_sentence;