let play={rock:"rock", paper: "paper", scissors: "scissors"}; 
function computerPlay() {
    let rnd = Math.floor(Math.random() * 3);
    switch (rnd) {
        case 0:
            return play.rock;
            break;
        case 1:
            return play.paper;
            break;
        case 2:
            return play.scissors;
            break;
    }
}
function playerPlay(){     
        let choice=prompt("Rock or paper or scissors?");
        let lowerCaseofChoice=choice.toLowerCase();
    if(lowerCaseofChoice== play.rock || lowerCaseofChoice==play.paper || lowerCaseofChoice==play.scissors){
        return lowerCaseofChoice;
      }
    while(!(lowerCaseofChoice== play.rock || lowerCaseofChoice==play.paper || lowerCaseofChoice==play.scissors)){
        alert("Its not defined");
       return playerPlay();
    }       
    }
let computerWin;
let playerWin;
function playRound(playerSelection,computerSelection){
    console.log("Player's selection:" + playerSelection);
    console.log("Computer's selection:" + computerSelection);
    computerWin=0;
    playerWin=0;
       if(computerSelection==play.rock){
          switch (playerSelection) {
            case play.rock: 
                break;
            case play.paper:
                playerWin++;
                break;
            case play.scissors:
                computerWin++;
                break;
          }
       }
       else if(computerSelection==play.paper){
        switch (playerSelection) {
            case play.paper: 
                break;
            case play.scissors:
                playerWin++;
                break;
            case play.rock:
                computerWin++;
                break;
          }
       }
       else if(computerSelection==play.scissors){
        switch (playerSelection) {
            case play.scissors: 
                break;
            case play.rock:
                playerWin++;
                break;
            case play.paper:
                computerWin++;
                break;
          }
       }       
       if(computerWin==1)
        return "You lost " +computerSelection + " wins " + playerSelection;
       else if(playerWin==1)
       return "You won " +playerSelection + " wins " + computerSelection;
       else
       return "It's a draw";         
     }
function game(){
    let lastScoreOfPlayer=0;
    let lastScoreOfComputer=0;
 for (let i = 0; i < 5; i++) {
    let playerSelection=playerPlay();
    let  computerSelection=computerPlay();
    console.log("Round:" + (i+1));
  console.log(playRound(playerSelection,computerSelection));
  if(playerWin==1)
   lastScoreOfPlayer++;
   else if(computerWin==1)
   lastScoreOfComputer++;
   console.log("Computer:" +lastScoreOfComputer + " Player:" + lastScoreOfPlayer);
 }
 if(lastScoreOfComputer>lastScoreOfPlayer)
 console.log("Computer wins");
 else if(lastScoreOfComputer==lastScoreOfPlayer)
 console.log("Its a draw");
 else
 console.log("Player wins");
}
game();


