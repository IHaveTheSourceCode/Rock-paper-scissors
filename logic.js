let computer_play = function(){
    let items = ['rock', 'paper', 'scissors'];
    let item = items[Math.floor(Math.random() * items.length)];
    return(item);
}
let computer_Selection = computer_play();
let ask = prompt("Rock, paper or scissors?");
let player_Selection = ask.toLowerCase();
let choose_winner = function(){
    // if same then draw
    console.log(player_Selection);
    console.log(computer_Selection);
    if(player_Selection == computer_Selection){
        console.log("It's a draw!");
    }
    // rock beats scissors
    else if(player_Selection == "rock"){
        if(computer_Selection == "scissors"){
            console.log("You win!");
        }else console.log("Computer won");
    }
    // paper beats rock
    else if(player_Selection == "paper"){
        if(computer_Selection == "rock"){
            console.log("You win!");
        }else console.log("Computer won");
    }
    // scissors beat paper
    else if(player_Selection == "scissors"){
        if(computer_Selection == "paper"){
            console.log("You win!");
        }else console.log("Computer won");
    }
}
choose_winner();