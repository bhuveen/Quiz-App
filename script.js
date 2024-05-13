const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const questionButtonElement = document.getElementById("answer-buttons");

startButton.addEventListener("click",startGame);

function startGame(){
   startButton.classList.add("hide");
}

function setNextQuestion(){

}
