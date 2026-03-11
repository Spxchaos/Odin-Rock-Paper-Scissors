console.log("Hello World");

function playRound(humanChoice, computerChoice){

    let humanScore = 0;
    let compScore = 0;

    if (humanChoice == 'rock' && computerChoice == 'paper'){
        console.log("YOU LOSE!, PAPER BEATS ROCK");
        compScore++;
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log("YOU WIN!, ROCK BEATS SCISSORS");
        humanScore++;
    }
    else if (humanChoice == 'rock' && computerChoice == 'rock'){
        console.log("IT'S A TIE!");
    }

    else if (humanChoice == 'paper' && computerChoice == 'rock'){
        console.log("YOU WIN!, PAPER BEATS ROCK");
        humanScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors'){
        console.log("YOU LOSE!, SCISSORS BEAT PAPER");
        compScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'paper'){
        console.log("IT'S A TIE!");
    }

    else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log("YOU WIN!, SCISSORS BEAT PAPER");
        humanScore++;
    }
    else if (humanChoice =='scissors'&& computerChoice == 'rock'){
        console.log("BOO! YOU LOSE! ROCK BEATS SCISSOR");
        compScore++;
    }
     else if (humanChoice =='scissors'&& computerChoice == 'scissors'){
        console.log("IT'S A TIE! LESBIANS LOVE THIS");
    }


}

function getHumanChoice(){

    const x = prompt("Rock, Paper, or Scissors:");

        let y = x.toLowerCase(); //to make the input case sensitive

        if(y == 'rock' || y == 'paper' || y == 'scissors'){  //if loop is in place so that the user cant enter invalid input, the function would run only if the inputs are correct

        return y;
        }

        else{
            getHumanChoice();  //this runs the function again
        }

}

function getComputerChoice(){

    let z = Math.random() * 10; //multiplied by 10 to increase the range
    //console.log(z); had used this to check values and correlate them with the given output

    if(z>= 0 && z < 3){
     return 'rock';
    }

    else if (z>=3 && z< 6){
        return 'paper';
    }

    else 
    {
        return 'scissors';
    }




}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

//getHumanChoice();

//getComputerChoice();