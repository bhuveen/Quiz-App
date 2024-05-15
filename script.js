document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById("start-btn");
    const nextButton = document.getElementById("next-btn");
    const questionContainerElement = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer-buttons");

    startButton.addEventListener('click', startGame);
    nextButton.addEventListener("click",()=>{
        currentQuestionIndex++;
        setNextQuestion();
    })
    let shuffledQuestions, currentQuestionIndex;

    function startGame() {
        startButton.classList.add("hide");
        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        questionContainerElement.classList.remove("hide");
        setNextQuestion();
    }

    function setNextQuestion(){
      resetstate();
      showQuestion(shuffledQuestions[currentQuestionIndex]); 
       }

    function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer);
        answerButtonsElement.appendChild(button);
    });
    }
       
    function resetstate(){
        clearstatusclass(document.body);
        nextButton.classList.add("hide");
        while (answerButtonsElement.firstChild){
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }
    function selectAnswer(e){
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct;
        setstatusclass(document.body, correct);
        Array.from(answerButtonsElement.children).forEach((button) => {
           setstatusclass(button,button.dataset.correct);
        });
        if  (shuffledQuestions.length > currentQuestionIndex + 1){
           nextButton.classList.remove("hide");
       }  else{
           startButton.innerText = "Restart Game";
           startButton.classList.remove("hide");
       }
     }

    function setstatusclass(element,correct){
        clearstatusclass(element);
        if(correct){
            element.classList.add("correct");
        }
        else{
            element.classList.add("wrong");
        }
    }

    function clearstatusclass(element){
        element.classList.remove("wrong");
        element.classList.remove("correct");
    }
    const questions =[
     {
        question:"which program is not commonly used programming language for frontend development?",
        answers:[
            {text:"python",correct:true},
            { text:"html",correct:false},
            {text:"css",correct:false},
            {text:"javascript",correct:false}, 
            ],
    },
    {
        question:"what does css stand for?",
        answers:[
            {text:"Creative Style Sheet",correct:false},
            { text:"Cascading Style Sheet",correct:true},
            {text:"Computer Style Sheet",correct:false},
            {text:"Content Style Sheet",correct:false}, 
            ],
    },
    {
        question:"Which Html Language is used to define an unordered list?",
        answers:[
            {text:"<ol>",correct:false},
            { text:"<ul>",correct:true},
            {text:"<li>",correct:false},
            {text:"<list>",correct:false}, 
            ],
    },
    {
        question:"what does Stand For HTML?",
        answers:[
            {text:"Hypertext Manipulate Language",correct:false},
            { text:"Hypertext Markup Language",correct:true},
            
            ],
    },
] 
});
