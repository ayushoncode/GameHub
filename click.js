let Time = 15;
let Score = 0;


let circle =  document.querySelector("#circle");
let box = document.querySelector("#box");
let score =  document.querySelector("#score");
let time =  document.querySelector("#time");


function moveCircle() {
    const boxRect = box.getBoundingClientRect();
    const circleRect = circle.getBoundingClientRect();
    const maxX = box.offsetWidth - circle.offsetWidth;
    const maxY = box.offsetHeight - circle.offsetHeight;

    const randX = Math.floor(Math.random() * maxX);

    const randY = Math.floor(Math.random() * maxY);

    circle.style.position = "absolute";
    circle.style.left = `${randX}px`;
    circle.style.top = `${randY}px`;


}

circle.addEventListener("click", () =>{
    clickFn();
    moveCircle();
})

const clickFn = () =>{


    Score++;
    score.textContent = `Score: ${Score}`;

   


}

const startTime = () => {
    const interval = setInterval(() => {
        Time--;
        time.textContent = `Time Left: ${Time}`; 
        
        if (Time <= 0) {
            clearInterval(interval); 
            
            circle.style.display = "none";
        }
    }, 1000);
};

startTime(); 