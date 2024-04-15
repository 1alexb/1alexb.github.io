var attempts = 0; // game counter

function play(choice) {
    if (attempts >= 3) { // if attempts are more than 3 , then break 
        document.getElementById('msg').innerHTML = "You have played 3 times. Refresh the page to play again.";
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
        document.getElementById('msg').innerHTML = message + " Refreshing the page to reset the game...";
        setTimeout(function() {
            alert("You won! The game will now reset.");
            location.reload();  // F5
        }, 3000);  // 3 sec delay
        return;
    } else {
        message += "You lose!";
    }
    
    attempts++;
    if (attempts >= 3) {
        message += " Game over. You played 3 rounds. Refresh to play again.";
    }

    document.getElementById('msg').innerHTML = message;
}
