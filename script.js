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
        question:"what is frontend?",
        answers:[
            {text:"web",correct:false},
            { text:"web interface",correct:true},
            {text:"web",correct:false},
            {text:"web",correct:false}, 
            ],
    },
    {
        question:"what is backend?",
        answers:[
            {text:"web",correct:false},
            { text:"web interface",correct:true},
            {text:"web",correct:false},
            {text:"web",correct:false}, 
            ],
    },
    {
        question:"what is backend?",
        answers:[
            {text:"web",correct:false},
            { text:"web interface",correct:true},
            {text:"web",correct:false},
            {text:"web",correct:false}, 
            ],
    },
    {
        question:"what is backend?",
        answers:[
            {text:"web",correct:false},
            { text:"web interface",correct:true},
            {text:"web",correct:false},
            {text:"web",correct:false}, 
            ],
    },
] 
});
