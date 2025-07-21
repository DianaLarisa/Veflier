function getRandomComputerResult(){
    const options=["Rock", "Paper", "Scissors"]
    const results=Math.floor(Math.random()*options.length)
    return options[results]
}
function hasPlayerWonTheRound(player, computer){
return(
    (player==="Rock" && computer==="Scissors") ||
    (player==="Scissors" && computer==="Paper") ||
    (player==="Paper" && computer==="Rock")
)
}
playerScore=0
computerScore=0

function getRoundResults(userOption){
const computerResult= getRandomComputerResult()
if(hasPlayerWonTheRound(userOption, computerResult)){
    playerScore++
    return `Player wins! ${userOption} beats ${computerResult}`
}else if(userOption=== computerResult ){
    return   `It's a tie! Both chose ${userOption}`
}else{
    computerScore++
    return `Computer wins! ${computerResult} beats ${userOption}`
}
}
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption){
    roundResultsMsg.textContent= getRoundResults(userOption)
    computerScoreSpanElement.textContent=computerScore
    playerScoreSpanElement.textContent=playerScore
    if(playerScore===3 || computerScore===3){
        winnerMsgElement.textContent=`${playerScore=== 3 ? "Player" : "Computer"} has won the game`
        resetGameBtn.style.display = "block"
        optionsContainer.style.display = "none"
    }
}
function resetGame(){
    playerScore=0
    computerScore=0
    computerScoreSpanElement.textContent=computerScore
    playerScoreSpanElement.textContent=playerScore
    resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
    computerScoreSpanElement.textContent=""
    winnerMsgElement.textContent=""
}
resetGameBtn.addEventListener("click", resetGame)
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
rockBtn.addEventListener("click", function(){
    showResults("Rock")
})
paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });