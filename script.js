let computerScore = 0;
let humanScore = 0;
let i = 0 
let results = document.querySelector(".result")
let playerScore = document.querySelector(".humanScore")
let alScore = document.querySelector(".computerScore")
function getComputerChoice(){
    // generate random number that gives us value from 1 to 9
    let RandomNumber = Math. floor(Math. random() * (9 - 1 + 1) + 1)
     let value;
    // if number is between 1 to 3 set value to "Rock"
    if (RandomNumber >= 1 && RandomNumber <= 3 ){
      value = "rock"
    }
    // if number is between 4 to 6 set value to "Paper"
    else if(RandomNumber>= 4 && RandomNumber <=6){
        value ="paper"
    }
    // if number is between 7 to 9 set value to "Scissors"
    else if(RandomNumber >= 7 && RandomNumber <= 9){
        value = "scissor"
    }
    //return that value
    return value;
}


function getHumanChoice(){
    // get human choice 
    let askHumanChoice = prompt("give user choice 'Rock', 'Paper' or 'Scissor ")
   askHumanChoice = askHumanChoice.toLowerCase()

  
    // validate human choice id its not valid choice ask again 
    if (askHumanChoice === "rock" || askHumanChoice ==="paper" || askHumanChoice === "scissor"){
        return askHumanChoice;
       }
    else{getHumanChoice()}

}

function playRound(humanChoice, computerChoice){
 
 
  if (i < 5){
    
    i++
  if(humanChoice ==="rock" && computerChoice === "scissor"){
   results.textContent = (`you win this round your choice ${humanChoice} beats ${computerChoice}`)
   humanScore++
  }
  else if(humanChoice === "scissor" && computerChoice === "paper"){
    results.textContent = (`you win this round your choice ${humanChoice} beats ${computerChoice}`)
    humanScore++
  }
  else if (humanChoice === "paper" && computerChoice === "rock"){
    results.textContent = (`you win this round ${humanChoice} beats ${computerChoice}`)
    humanScore++

  }
  else if (humanChoice === computerChoice){
    results.textContent = (`tie your choice  ${humanChoice}  is same as computers choice ${computerChoice}`)
  }
  else {
    results.textContent = (`you lose computer choice  ${computerChoice} beats  your ${humanChoice}`)
    computerScore++
  }
  playerScore.textContent = humanScore;
  alScore.textContent = computerScore;
}
  else{
   i = 0 
   if (humanScore > computerScore){
      results.textContent= (`you win these 5 round your score is ${humanScore} and computers score is ${computerScore}`)
    }
    else if (humanScore < computerScore){
        results.textContent= (`you lose these 5 round your score is ${humanScore} and computers score is ${computerScore}`)

    }
    else{
        results.textContent = (` match was draw these 5 round your score ${humanScore} and computer score ${computerScore} is same`)
  }
   humanScore = 0
   computerScore = 0
  }
 

}

const btn = document.querySelectorAll("button")
btn.forEach((selection)=>{
  selection.addEventListener("click",(e)=> {
  let humanChoice = e.target.id
  let computerChoice = getComputerChoice()
  playRound(humanChoice,computerChoice)
  })
})




function playGame(){





    // for (let i = 0; i < 5; i++){
    //     const humanChoice = getHumanChoice()
    //     const computerChoice = getComputerChoice()
    //     playRound(humanChoice, computerChoice)
        
    // }
    // if (humanScore > computerScore){
    //   alert(`you win your score is ${humanScore} and computers score is ${computerScore}`)
    // }
    // else if (humanScore < computerScore){
    //     alert(`you lose your score is ${humanScore} and computers score is ${computerScore}`)

    // }
    // else(
    //     alert(` match was draw your score ${humanScore} and computer score ${computerScore} is same`)
    // )




}
playGame()