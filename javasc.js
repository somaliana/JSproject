
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


function game() {
    let userChoice = prompt("Enter your figure: ");

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
for (let i =0;i<5;i++){
    console.log(game());
}

