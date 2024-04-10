function play(choice) {
    var comp = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    var result = {
        rock: {w: "scissors", l: "paper"},
        paper: {w: "rock", l: "scissors"},
        scissors: {w: "paper", l: "rock"}
    };

    var message = "You selected " + choice + " and the computer selected " + comp + ". ";

    if (choice === comp) {
        message += "Play again, you got a tie.";
    } else if (comp === result[choice].w) {
        message += "You win this time!";
    } else {
        message += "The computer wins this time, loser, maybe play again.";
    }

    document.getElementById('msg').innerHTML = message;
}
