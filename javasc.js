
function computerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch(choice) {
        case 0:
            return "scissors";
        case 1:
            return "rock";
        case 2:
            return "paper";


    }
}


function game(userChoice) {
    

    if (userChoice == computerChoice()) {
        return "tie";
    }
    else if (userChoice=="rock") {
        if (computerChoice()=="paper") {
            return "You lost";
        }
        else {
            return "You won";
        }
    }
    else if(userChoice=="paper") {
        if (computerChoice()=="scissors"){
            return "You lost";
        }
        else {
            return "You won";
        }
    }
    else if(userChoice=="scissors") {
        if (computerChoice()=="rock"){
            return "You lose";
        }
        else {
            return "You won";
        }                         
    }
}
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  alert(game('rock'));
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', ()=> {
    alert(game('paper'));
});

const scissors = document.querySelector('#scissors');

scissors.addEventListener('click', ()=>{
    alert(game('scissors'));
})

