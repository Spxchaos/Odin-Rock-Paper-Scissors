console.log("Hello World");

/*function playRound(humanChoice, computerChoice){

}*/

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

    let z = Math.random() * 10;
    console.log(z);

    if(z>= 0 && z<= 3){
     console.log('rock');
    }

    else if (z>=3 && z<=6){
        console.log('paper');
    }

    else
    {
        console.log('scissors');
    }




}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

//getHumanChoice();

getComputerChoice();