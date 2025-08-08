let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");


let turn0 = true ;//player x, player y
let  move = 0 ;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgcont.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
          box.innerText = "O"
          box.style.color = "blue";
            turn0 = false;

        }
        else{
            box.innerText = "X";
            
            turn0 = true;
        }


        box.disabled = "true";
        move++;

      let isWinner =  checkWinner();


if(move === 9 && !isWinner){
    showDraw();
}

    });

});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = "true"

    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = "false"
box.innerText = "";
    }
}

const showWinner = (Winner) =>{
    msg.innerText = `congrtas , Winner is ${Winner} `;
    msgcont.classList.remove("hide");
    disableBoxes();

}


const checkWinner = () => {
    

    for( let pattern of winPatterns ) {
       
    let pos1Val   =   boxes[pattern[0]].innerText;
    let pos2Val   =   boxes[pattern[1]].innerText;
      let pos3Val   =   boxes[pattern[2]].innerText;

      if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
     if(pos1Val == pos2Val && pos2Val === pos3Val){
        console.log("Winner",pos1Val);

        showWinner(pos1Val);
        return;

        

      
     }

    
      }
  
    
    }

};


const showDraw = () => {
    msg.innerText = "Game Ended in a Draw!";
    msgcont.classList.remove("hide");
    disableBoxes();
};




newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

