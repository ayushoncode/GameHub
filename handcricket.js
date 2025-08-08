let compScore=0;
let userScore =0;
let isUserBatting = true;
let gameOver = false;
let isCompBatting = true;
let userPoint=0;
let compPoint=0;

let numbers = document.querySelectorAll(".number");
let userscorep = document.querySelector("#user-score")
let compscorep = document.querySelector("#comp-score")
let msg = document.querySelector("#msg");
let tosses = document.querySelectorAll(".toss");
let chooses = document.querySelectorAll(".choose");
let resMsg = document.querySelector("#resMsg");
let chooosen = document.querySelector("#Chooosen");
let userpoint = document.querySelector("#userPoint");
let comppoint = document.querySelector("#compPoint");



chooses.forEach((c) => c.classList.add("hide"));

tosses.forEach((toss) =>{
    toss.addEventListener("click" , () =>{

console.log("lets toss")

       const userToss = toss.textContent;
       let compTossChoice = genTossChoice(); 
    

       if(compTossChoice === userToss){
        resMsg.innerText="you won the toss    choose";
        resMsg.style.color = "green"
        resMsg.style.backgroundColor = "#E0E4B4";
        chooses.forEach((c) => c.classList.remove("hide"));
        tosses.forEach((toss) => toss.classList.add("hides"));
           
       
      
        chooses.forEach((choose) =>{
            choose.addEventListener("click" ,() =>{
            let choosed = choose.textContent;
           
            if(choosed === "BAT"){
               
                ayushChoice();
                chooosen.innerText = "you choosed to  bat first ";
                chooosen.style.color = "yellow";
                chooosen.style.backgroundColor = "black";
                
             
               
            }
            else{
                chooosen.innerText = "you choosed to  bowl first ";
                chooosen.style.color = "yellow";
                chooosen.style.backgroundColor = "black";
                computerChoice();
               

            }
            chooses.forEach((c) => c.classList.add("hide"));
            });

        });
    
       }
       else{
        resMsg.innerText="comp won the toss";
        tosses.forEach((toss) => toss.classList.add("hides"));
        resMsg.style.color = "red"
        resMsg.style.backgroundColor = "#EE8078";
        let resChoose = genTossResChoice();

        if (resChoose === "BAT"){
            chooosen.innerText = "comp choosed to  bat first ";
            chooosen.style.color = "yellow";
                chooosen.style.backgroundColor = "black";
            computerChoice();

        }
        else{
            chooosen.innerText = "comp choosed to  bowl first ";
            chooosen.style.color = "yellow";
                chooosen.style.backgroundColor = "black";
            ayushChoice();

        }
       }


 

    });
 

    });









ayushChoice = () =>{
   
numbers.forEach((number) =>{
    number.addEventListener("click",() =>{
        if(gameOver) return;
      
        const userChoice = number.textContent;
        if(isUserBatting){
        playGame(userChoice);
        }
        else{
            compChance(userChoice);
        }
      
    });
});
}


const playGame = (userChoice) => {
    
    console.log("user Choice = ", userChoice);
  
    let compChoice = genCompChoice();
    console.log("comp Choice = ", compChoice);

    if(parseInt(userChoice)===compChoice){
        msg.innerText = "Out Now computer will bat";
        msg.style.color = "red";
        isUserBatting = false;

    }
  else{
  
    userScore+=parseInt(userChoice);
    console.log(userScore);
    userscorep.innerText = userScore;
   
  }
  

  
}

const genCompChoice = () =>{
    let runs =[1,2,3,4,5,6]
    let idx = Math.floor(Math.random() * 6);
    return runs[idx];
}

const compChance =(userInput) =>{

  
    let compChoice = genCompChoice();
  
console.log("use choice",userInput);
console.log("Computer choice =", compChoice);

   if(compChoice===parseInt(userInput)){
    msg.innerText = "Computer is Out  ";
    if (userScore> compScore) {
        msg.style.color = "green";
        msg.innerText += ` you wins  by  ${userScore-compScore} runs`
        userPoint++;
        userpoint.innerText=userPoint;
        
     
    } 
    else if (userScore < compScore) {
       msg.innerText += " comp wins ";
       compPoint++;
        comppoint.innerText=compPoint;
    } 
    else {
        msg.innerText += "It's a tie";
        msg.style.color = "orange";
      
    }

 gameOver = true;
 btnDisable();

  
}


else{

compScore+=compChoice;

compscorep.innerText = compScore;
msg.innerText = `Computer scored ${compChoice} run`;




if (compScore > userScore) {
    gameOver = true;
    msg.innerText = `computer won the game by 10 wickets`;
    msg.style.color = "Red";
    compPoint++;
        comppoint.innerText=compPoint;
    btnDisable();

 

}
}


}

const btnDisable = () =>{
    numbers.forEach((number) =>{
    
        number.disabled = true;

    } );
}


const genTossChoice = () =>{
    let tosss = ["HEADS","TAILS",];
    let idxx = Math.floor(Math.random() * 2);
    return tosss[idxx];
}






const computerChoice = () =>{
    numbers.forEach((number) =>{
        number.addEventListener("click", () => {
            if(gameOver) return;

   const userChoice = number.textContent;


if(isCompBatting){
    playGame2(userChoice);
}
else{
  userChance(userChoice)
}




        });
    })

 
}

const playGame2 = (userChoice) =>{


let compChoice = genCompChoice();

if(compChoice === parseInt(userChoice)){
    msg.innerText = "computer out now user will bat"
    msg.style.color ="green"
    isCompBatting = false;
}
else{
    compScore += compChoice;
    compscorep.innerText = compScore;
    msg.innerText = `Computer scored ${compChoice} run`;
    msg.style.color = "red"
}


};

const userChance = (userInput) =>{
msg.innerText ="";


    let compChoice = genCompChoice();

    
   if(compChoice===parseInt(userInput)){
    msg.innerText = "user is Out  ";
    if (userScore < compScore) {
        msg.style.color = "Red";
        msg.innerText +=` comp wins  by ${compScore-userScore} runs`
        compPoint++;
        comppoint.innerText=compPoint;
     
    } 
    else if (userScore > compScore) {
       msg.innerText += `user wins  by ${userScore-compScore} runs`
       userPoint++;
        userpoint.innerText=userPoint;
    } 
    else {
        msg.innerText += "It's a tie"
        msg.style.color = "orange";
      
    }

 gameOver = true;
 btnDisable();
  
}


else{
    userScore+=parseInt(userInput);

userscorep.innerText = userScore;

if (userScore >= compScore) {
    msg.innerText = `You won the game by 10 wickets`;
    msg.style.color = "green";
    userPoint++;
    userpoint.innerText=userPoint;
    gameOver = true;
    btnDisable();
  }

}

}




const genTossResChoice = () =>{

let Choice = ["BAT","BOWL"];
let randIdx = Math.floor(Math.random()*2);
return Choice[randIdx];


}



// const reset = () =>{
//     numbers.forEach((number) =>{

//         number.disabled = false;
//     })

//     gameOver = false;
//     update();
    
   
// } 


