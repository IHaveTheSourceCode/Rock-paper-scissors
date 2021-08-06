let pointsCounterComputer = 0;
let pointsCounterUser = 0;
let choose_winner = function(player_Selection){
    if(pointsCounterComputer == 3){
        alert("Computer Won!");
    }if(pointsCounterUser == 3){
        alert("User Won!");
    }if(pointsCounterUser && pointsCounterComputer == 3){
        alert("It's a draw!");
    }

let computer_play = function(){
    let items = ['rock', 'paper', 'scissors'];
    let item = items[Math.floor(Math.random() * items.length)];
    return(item);
}
let computer_Selection = computer_play();
// if same then draw
if(player_Selection == computer_Selection){
    pointsCounterUser++;
    pointsCounterComputer++;
    return("It's a draw!");
}
// rock beats scissors
else if(player_Selection == "rock"){
    if(computer_Selection == "scissors"){
    pointsCounterUser++;
        return("You win!");
    }else{
        pointsCounterComputer++;
        return("Computer won.");
    }}
// paper beats rock
else if(player_Selection == "paper"){
    if(computer_Selection == "rock"){
        pointsCounterUser++;
        return("You win!");
    }else{
        pointsCounterComputer++;
        return("Computer won.");
    }
}
// scissors beat paper
else if(player_Selection == "scissors"){
    if(computer_Selection == "paper"){
        pointsCounterUser++;
        return("You win!");
    }else{
        pointsCounterComputer++;
        return("Computer won.");
    }
}
}
//buttons logic
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const body = document.body
const resultsContainter = document.createElement("div");
body.appendChild(resultsContainter);

rockBtn.addEventListener('click', () => resultsContainter.append(choose_winner("rock")));;
paperBtn.addEventListener('click', () => resultsContainter.append(choose_winner("paper")));;
scissorsBtn.addEventListener('click', () => resultsContainter.append(choose_winner("scissors")));;