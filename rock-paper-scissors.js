function getComputerChoice(){
    let rand = Math.floor(Math.random()*3);
    switch(rand){
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return "Scissors"
    }
}

function capitalized(playerSelection){
    playerSelection = playerSelection.toLowerCase();
  
    return playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase());
}

function gameStart(playerSelection, computerSelection){
    let win = true;
    if(playerSelection === computerSelection){
        return `Draw! ${capitalized(playerSelection)} is equal to ${computerSelection}`
    }else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        win = false;
    }else if(playerSelection === "Rock" && computerSelection === "Paper"){
        win = false;
    }else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        win = false;
    }

    if(win){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function playerSelectionValidation(playerSelection){
    if(!(playerSelection === "Rock" || playerSelection === "Scissors" || playerSelection === "Paper")){
        console.log("Not valid, please enter a Rock Paper or Scissors")
        return false;
    }
}

function whoWin(winCount, loseCount){
    if(winCount > loseCount){
        alert("YOU WIN!!!");
    }else if(winCount < loseCount){
    alert("You lose :(");
    }else if(winCount === loseCount){
    alert("It's a draw");
    }
}

