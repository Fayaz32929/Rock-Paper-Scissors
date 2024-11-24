
function getComputerChoice(){
    // generate random number that gives us value from 1 to 9
    const RandomNumber = Math. floor(Math. random() * (9 - 1 + 1) + 1)
     let value;
    // if number is between 1 to 3 set value to "Rock"
    if (RandomNumber >= 1 && RandomNumber <= 3 ){
      value = "Rock"
    }
    // if number is between 4 to 6 set value to "Paper"
    else if(RandomNumber>= 4 && RandomNumber <=6){
        value ="Paper"
    }
    // if number is between 7 to 9 set value to "Scissors"
    else if(RandomNumber >= 7 && RandomNumber <= 9){
        value = "Scissor"
    }
    console.log(value)
    //return that value
    return value;
}
getComputerChoice()

