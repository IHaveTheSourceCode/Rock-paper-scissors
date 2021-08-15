let playerScore = 0;
let computerScore = 0;
disableNextRoundButton();
const buttons = document.querySelectorAll('input');
function addResetSite(){
    document.getElementById("resetBtn").remove();
    const reset = document.createElement("button");
    btnReset.appendChild(reset);
    reset.append("reset");
    reset.setAttribute("id", "reset");
    reset.setAttribute("onclick", "resetSite()");
}
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableNextRoundButton() {
    document.getElementById("resetBtn").disabled = true;
}
function enableNextRoundButton() {
    document.getElementById("resetBtn").disabled = false;
}
function resetSite(){
    location.reload();
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        //tutaj
        showComputerChoice(computerSelection);
        if (playerScore == 3) {
            result += '<br><br>You won the game!'
            disableNextRoundButton();
            addResetSite();
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        //tutaj
        showComputerChoice(computerSelection);
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        //tutaj
        showComputerChoice(computerSelection);
        if (computerScore == 3) {
            result += '<br><br>Computer has won!'
            disableNextRoundButton();
            addResetSite();
        }
    }

    document.getElementById('result').innerHTML = result;
    return;
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

//animations

//rock animation
//makes scissors and papper dissapear; makes rock goes to center
function chooseRock(){
    const scissors = document.getElementById("scissors");
    scissors.style.transition = "opacity .5s linear 0s";
    scissors.style.opacity = "0"
    const paper = document.getElementById("paper");
    paper.style.transition = "opacity .5s linear 0s";
    paper.style.opacity = "0"
    setTimeout(moveSides, 400);
    objectsOff("rock", "paper", "scissors");
}

//paper animation
//makes makes rock and scissors dissapear
function choosePaper(){
    const rock = document.getElementById("rock");
    rock.style.transition = "opacity .5s linear 0s";
    rock.style.opacity = "0"
    const scissors = document.getElementById("scissors");
    scissors.style.transition = "opacity .5s linear 0s";
    scissors.style.opacity = "0"
    objectsOff("rock", "paper", "scissors");
}
//scissors animation
//makes rock and paper dissapear; makes scissors move to center
function chooseScissors(){
    const rock = document.getElementById("rock");
    rock.style.transition = "opacity .5s linear 0s";
    rock.style.opacity = 0;
    const paper = document.getElementById("paper");
    paper.style.transition = "opacity .5s linear 0s";
    paper.style.opacity = "0";
    setTimeout(moveSides, 400);
    objectsOff("rock", "paper", "scissors");
}
function moveSides(){
    const scissorsEle = document.getElementById("scissors");
    scissorsEle.style.transition = "transform 1s ease 0s";
    scissorsEle.style.transform = "translateX(-25vw)";
    const rockEle = document.getElementById("rock");
    rockEle.style.transition = "transform 1s ease 0s";
    rockEle.style.transform = "translateX(25vw)";

}
function objectsOff(object1, object2, object3){
    const objectFirst = document.getElementById(object1);
    objectFirst.style.pointerEvents = "none";
    const objectSecond = document.getElementById(object2);
    objectSecond.style.pointerEvents = "none";
    const objectThird = document.getElementById(object3);
    objectThird.style.pointerEvents = "none";
}
    //if, wtedy trzy funkcje,
    //dla kamienia kamien wraca w lewo reszta sie pojawia
    //dla nozyczek, nozyczki wracaja w prawo reszta sie pojawia (display: ...)
    //dla papieru, reszta sie pojawia 

function resetStyles(){
    function turnInvi(){
        const rockHide = document.getElementById("rock");
        rockHide.style.transition = "opacity .5s linear 0s";
        rockHide.style.opacity = 0;   

        const paperHide = document.getElementById("paper");
        paperHide.style.transition = "opacity .5s linear 0s"
        paperHide.style.opacity = 0;

        const scissorsHide = document.getElementById("scissors");
        scissorsHide.style.transition = "opacity .5s linear 0s"
        scissorsHide.style.opacity = 0;
    }
    function resetPosition(){
        const rockReset = document.getElementById("rock");
        rockReset.style.transition = "transform 1s ease 0s";
        rock.style.transform = "translateX(-0vw)";

        const scissorsReset = document.getElementById("scissors");
        scissorsReset.style.transition = "transform 0s ease 0s";
        scissorsReset.style.transform = "translateX(0vw)";
        
        const paperReset = document.getElementById("paper");
        paperReset.style.transition = "transform 0s ease 0s";
        paperReset.style.transform = "translateX(0vw)";
    }
    function turnVis(){
        const rockShow = document.getElementById("rock");
        rockShow.style.transition = "opacity .5s linear 0s";
        rockShow.style.opacity = 1;   

        const paperShow = document.getElementById("paper");
        paperShow.style.transition = "opacity .5s linear 0s"
        paperShow.style.opacity = 1;

        const scissorsShow = document.getElementById("scissors");
        scissorsShow.style.transition = "opacity .5s linear 0s"
        scissorsShow.style.opacity = 1;
    }
    function turnClick(){
        const rockEvent = document.getElementById("rock");
        rockEvent.style.pointerEvents = "auto";

        const paperEvent = document.getElementById("paper");
        paperEvent.style.pointerEvents = "auto";

        const scissorsEvent = document.getElementById("scissors");
        scissorsEvent.style.pointerEvents = "auto";       
    }
    function addStyle(){
        document.styleSheets[0].addRule("input:hover", "transform: scale(1.1)");
    }
    function dissapearImage(){
        const imgtrs = document.getElementById("genImg");
        imgtrs.style.transition = "opacity 0.5s linear 0s"
        imgtrs.style.opacity = 0;   
    }
    function removeImage(){
        document.getElementById("genImg").remove();
    }
    dissapearImage();
    disableNextRoundButton();
    turnInvi();
    setTimeout(removeImage, 500);
    setTimeout(resetPosition, 500);
    setTimeout(turnVis, 600);
    // setTimeout(addStyle, 1100);  //doesn't work tho
    setTimeout(turnClick, 1100);
}
function showComputerChoice(choice){
    enableNextRoundButton();

    const rockImage = document.createElement('img');
    rockImage.src = "images/rock.svg";
    rockImage.style = "width: 20%; max-width: 200px; margin-left: 41%";
    rockImage.setAttribute("id", "genImg");

    const paperImage = document.createElement('img');
    paperImage.src = "images/paper.svg";
    paperImage.style = "width: 20%; max-width: 200px; margin-left: 41%";
    paperImage.setAttribute("id", "genImg");

    const scissorsImage = document.createElement('img');
    scissorsImage.src = "images/scissors.svg";
    scissorsImage.style = "width: 20%; max-width: 200px; margin-left: 41%;";
    scissorsImage.setAttribute("id", "genImg");


    const container = document.getElementById("computerChoice");

    if(choice == "rock"){
        computerChoice.appendChild(rockImage);
        // document.getElementById("genImg").style = "opacity: 0";
        // setTimeout(objectAppear, 500);
    }else if(choice == "paper"){
        computerChoice.appendChild(paperImage);
        // document.getElementById("genImg").style = "opacity: 0";
        // setTimeout(objectAppear, 500);
    }else if(choice == "scissors"){
        computerChoice.appendChild(scissorsImage);
        // document.getElementById("genImg").style = "opacity: 0";
        // setTimeout(objectAppear, 500);
    }
    function objectAppear(){
        const el = document.getElementById("genImg");
        el.style.transform = "opacity 0.5s linear 0s";
        el.style.opacity = 1;
    };
}