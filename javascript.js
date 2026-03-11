console.log("Hello World");

/*function playRound(humanChoice, computerChoice){

}*/

function getHumanChoice(){

    const x = prompt("Rock, Paper, or Scissors:");

        y = x.toLowerCase();

        if(y == 'rock' || y == 'paper' || y == 'scissors'){

        return y;
        }

        else{
            getHumanChoice();
        }

}

/*function getComputerChoice(){



}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);*/

getHumanChoice();