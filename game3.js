var attempts = 0; // game counter
var userChoices = []; // array to store user choices

function play(choice) {
    userChoices.push(choice); // add user choice to the array

    var comp = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    var result = {
        rock: {w: "scissors", l: "paper"},
        paper: {w: "rock", l: "scissors"},
        scissors: {w: "paper", l: "rock"}
    };

    var message = "Round " + (attempts + 1) + ": You chose " + choice + ". Computer chose " + comp + ". ";
    
    if (choice === comp) {
        message += "It's a tie!";
    } else if (comp === result[choice].w) {
        message += "You win!";
    } else {
        message += "You lose!";
    }
    
    attempts++; // increment game counter

    if (attempts >= 5) {
        message += " Game over. You played 5 rounds with choices: " + userChoices.join(", ") + ". Refreshing the page to restart the game...";
        document.getElementById('msg').innerHTML = message; // display the final message
        setTimeout(function() {
            location.reload();  // refresh the page after showing choices
        }, 5000);  // 5 sec delay for refresh
        return;
    }

    document.getElementById('msg').innerHTML = message; // display the message for current round
}
