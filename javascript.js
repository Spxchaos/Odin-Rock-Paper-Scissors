console.log("Hello World");

    let humanScore = 0;
    let compScore = 0;
    let flag = false;




function playRound(humanChoice, computerChoice){

    comp.innerText = `computer choice: ${computerChoice}`;

    if (humanChoice == 'rock' && computerChoice == 'paper'){
        console.log("YOU LOSE!, PAPER BEATS ROCK");
        ++compScore;
        console.log(compScore, humanScore);
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log("YOU WIN!, ROCK BEATS SCISSORS");
        ++humanScore;
        console.log(compScore, humanScore);
        //return humanScore;
    }
    else if (humanChoice == 'rock' && computerChoice == 'rock'){
        console.log("IT'S A TIE!");
        console.log(compScore, humanScore);
    }

    else if (humanChoice == 'paper' && computerChoice == 'rock'){
        console.log("YOU WIN!, PAPER BEATS ROCK");
        ++humanScore;
        console.log(compScore, humanScore);
        //return humanScore;
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors'){
        console.log("YOU LOSE!, SCISSORS BEAT PAPER");
        ++compScore;
        console.log(compScore, humanScore);
        //return compScore;
    }
    else if (humanChoice == 'paper' && computerChoice == 'paper'){
        console.log("IT'S A TIE!");
        console.log(compScore, humanScore);
    }

    else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log("YOU WIN!, SCISSORS BEAT PAPER");
        ++humanScore;
        console.log(compScore, humanScore);
        //return humanScore;
    }
    else if (humanChoice =='scissors'&& computerChoice == 'rock'){
        console.log("BOO! YOU LOSE! ROCK BEATS SCISSOR");
        ++compScore;
        console.log(compScore, humanScore);
        //return compScore;
    }
     else if (humanChoice =='scissors'&& computerChoice == 'scissors'){
        console.log("IT'S A TIE! LESBIANS LOVE THIS");
        console.log(compScore, humanScore);
    }

}





/*function getHumanChoice(){

    const x = prompt("Rock, Paper, or Scissors:");

        let y = x.toLowerCase(); //to make the input case sensitive

        if(y == 'rock' || y == 'paper' || y == 'scissors'){  //if loop is in place so that the user cant enter invalid input, the function would run only if the inputs are correct
            console.log(y);
        return y;
        }

        else{
            getHumanChoice();  //this runs the function again
        }

}*/

function getComputerChoice(){

    let z = Math.random() * 10; //multiplied by 10 to increase the range
    //console.log(z); had used this to check values and correlate them with the given output

    if(z>= 0 && z < 3){
        console.log('rock');
        
     return 'rock';
    }

    else if (z>=3 && z< 6){
        console.log('paper');
        return 'paper';
    }

    else 
    {
        console.log('scissors');
        return 'scissors';
    }




}

function playGame(){
    //for(let i = 0; i < 5;i++){
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
 
        playRound(humanSelection,computerSelection);
    
    if (humanScore>compScore){
    console.log("YOU WIN THE MATCH, HURRAY");
        }
    else if (compScore>humanScore){
    console.log("YOU LOSE THE MATCH, TRY AGAIN!");
        }
    else{
    console.log("ITS A TIE");
        } 

    //}
}





//playRound(humanChoice, computerChoice);

//getHumanChoice();

//getComputerChoice();

//playGame();

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const log = document.querySelector('#log');
const win = document.querySelector('#win');
const reset = document.querySelector('#reset');
const comp = document.querySelector('#comp');

comp.innerText = `Computer Choice: `

log.innerText = `compScore: ${compScore}
                 humanScore ${humanScore}`;

rock.addEventListener('click', () => {
    if (5 >= humanScore && 5 >= compScore){
    playRound("rock", getComputerChoice());
    log.innerText = `
                    compScore: ${compScore}
                    humanScore ${humanScore}`

    }
                    winDeclaration();
    //console.log('rock');
    //return 'rock';
});

paper.addEventListener('click', () => {
    if (5 >= humanScore && 5 >= compScore){
    playRound("paper", getComputerChoice());
        log.innerText = ` 
                    compScore: ${compScore}
                    humanScore ${humanScore}`

    }
                    winDeclaration();
    //console.log('paper');
    //return 'paper';
});

scissor.addEventListener('click', () => {
    if (5 >= humanScore && 5 >= compScore){

    
    playRound("scissors", getComputerChoice());
        log.innerText = `
                    compScore: ${compScore}
                    humanScore ${humanScore}`
    }
                winDeclaration();
    //console.log('scissors');
   // return 'scissors';
});


function winDeclaration(){
if( compScore === 5){
     win.innerText = `You Lose Comp Wins`;
    disableButtons();
}
else if (humanScore === 5){
        win.innerText = `You Win Comp Loses`;
        disableButtons();
}

}

reset.addEventListener("click", ()=>{
   log.innerText = `compScore: ${compScore = 0}         
                    humanScore ${humanScore = 0}`; //resets comp and human scores along with the win 

    win.innerText = ``;
    comp.innerText = `Computer Choice: `;
    enableButtons();


});

function disableButtons(){
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;

}

function enableButtons(){
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
}