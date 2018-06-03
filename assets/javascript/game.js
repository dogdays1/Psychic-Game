//javascript

//<script>

//VARIABLES
var i = 0;
var wins = 0;
var losses = 0;
var ug = [];
var alphabet =
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"
        , "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var cg = "";
var gl = 0;
var winLoss =
    "<p>Wins =  " + wins + "</p>" +
    "<p>Losses =  " + losses + "</p>";
var keycheck;

// FUNCTIONS
function computerGuess() {
    cg = alphabet[Math.floor(Math.random() * 26)];
    console.log("computer guess  " + cg);
}

function displayStats() {
    var winLoss =
        "<p>Wins=  " + wins + "</p>" +
        "<p>Losses=  " + losses + "</p>";
    document.querySelector("#stats").innerHTML = winLoss;
}
function displayGuesses() {
    var guesses = "<p>Guesses left =  " + gl + "</p>" +
        "<p> Your Guesses:" + ug + " .</p>"
    document.querySelector("#alphGuess").innerHTML = guesses;
}

// MAIN PROCESS
computerGuess();
//add key press and push it into array
document.onkeyup = function (event) {
    var thisGuess = event.key;
    var tgl = thisGuess.toLowerCase();
    keycheck = ug.indexOf(tgl);
    if (keycheck > -1) {
        alert("You've already pushed that key")
    }
    else {
        ug.push(tgl);
        console.log("user guess  " + tgl);
        i++
        gl = 9 - i;
        displayGuesses();

        if (tgl === cg) {
            wins++;
            displayStats();
            i = 0;
            ug = [];
            computerGuess();
            //  console.log(cg);
        }
        else if (i === 9) {
            losses++;
            ug = [];
            displayStats();
            i = 0;
            computerGuess();
        }
        console.log("win counter  " + wins);
        console.log("guess counter  " + i);
    }
}
//
//   }
//       document.getElementById("#alphGuess").innerHTML = ug;
//</script>