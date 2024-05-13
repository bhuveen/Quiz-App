document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById("start-btn");
    const nextButton = document.getElementById("next-btn");
    const questionContainerElement = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const questionButtonElement = document.getElementById("answer-buttons");

    startButton.addEventListener('click', startGame);

    let shuffledQuestions, currentQuestionIndex;

    function startGame() {
        startButton.classList.add("hide");
        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        questionContainerElement.classList.remove("hide");
    }

    function setNextQuestion(){

    }

    function showQuestion(){

    }

    const questions =[
     {
        question:"what is frontend?",
        answer:[
            {text:"web",correct:false},
            { text:"web interface",correct:true} 
            ],
    },
    {
        question:"what is frontend?",
        answer:[
            {text:"web",correct:false},
            { text:"web interface",correct:true} 
            ],
    },
] 
});
