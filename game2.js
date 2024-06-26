var attempts = 0; // game counter
var userChoices = []; // array to store user choices

function play(choice) {
    userChoices.push(choice); // add user choice to the array

    if (attempts >= 5) { // if attempts are more than 5, then show choices and offer a game reset
        document.getElementById('msg').innerHTML = "You have played 5 times with choices: " + userChoices.join(", ") + ". Refresh the page to play again.";
        setTimeout(function() {
            location.reload();  // refresh the page after showing choices
        }, 5000);  // 5 sec delay for refresh
        return;
    }

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
        setTimeout(function() {
            location.reload();  // refresh the page after showing choices
        }, 5000);  // 5 sec delay for refresh
    }

    document.getElementById('msg').innerHTML = message; // display the message
}
