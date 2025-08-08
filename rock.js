let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random() * 3); 
  return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was Draw"); 
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31 ";    

}

const showWinner = (userWin) =>{
if(userWin) {
    userScore++;
    userScorepara.innerText =userScore;
    console.log("you win");
    msg.innerText = "you win!";
    msg.style.backgroundColor = "green";
}
    else {
        compScore++;
        compScorepara.innerText =compScore;
        console.log("you losse");
        msg.innerText = "you losse!";
        msg.style.backgroundColor = "red";
        
    }

}

const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice);
    //Generate computer choice 
    const compChoice = genCompChoice();
    console.log("Comp Choice = ",compChoice);
  

    if(userChoice === compChoice){
        //Draw the game 
        drawGame();

    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
           userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper") {
            //rock ,scissors
            userWin = compChoice === "scissors" ? false : true;

        }
        else{
            //rock paper
            userWin = compChoice === "rock" ? false : true ;
        }

        showWinner(userWin); 
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
       

    });
});
