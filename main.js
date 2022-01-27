// Global variables 
const directionsBtn = document.querySelector('#directions');
const modal_container = document.querySelector('#modal_container');
const modal_close = document.querySelector('#close');
const startBtn = document.querySelector('#start')
const restartBtn = document.querySelector('#restart');
const nextBtn = document.querySelector('#next');
const gameContainer = document.querySelector('.row');
const gameMessage = document.querySelector('#game-message');
const questionElement = document.querySelector('#question');
const answerButtons = Array.from(document.querySelectorAll('.answer-buttons'));
const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
const choice4 = document.querySelector('#choice4');
const winsTracker = document.querySelector('#wins-tracker');
const lossesTracker = document.querySelector('#losses-tracker');





//Questions array
const questions = [
    {
        question: 'What year were the Boston Celtics founded?',
        choices: ['A: 1946', 'B: 1956', 'C: 1966', 'D: 1976'],
        answer: 'A: 1946'
    },
    {
        question: 'What is the name of the Boston Celtics Mascot?',
        choices: ['A: Irish', 'B: Shamrock', 'C: Lucky', 'D: Banshee'],
        answer: 'C: Lucky'
    },
    {
        question: 'Which Celtics player grabbed 50 rebounds in a single game?',
        choices: ['A: Kevin Garnett', 'B: Dave Cowens', 'C: Robert Parish', 'D: Bill Russell'],
        answer: 'D: Bill Russell'
    },
    {
        question: 'What did Celtics coach Red Auerbach often do when he thought victory was assured?',
        choices: ['A: Take Off His Shoes', 'B: Have A Beer', 'C: Smoke A Cigar', 'D: Take Off His Tie'],
        answer: 'C: Smoke A Cigar'
    },
    {
        question: 'Which Celtics player scored 60 points in a single game?',
        choices: ['A: Larry Bird', 'B: Paul Pierce', 'C: Jasyon Tatum', 'D: John Havlicek'],
        answer: 'A: Larry Bird'
    },
    {
        question: 'Who is the Boston Celtics all-time points leader?',
        choices: ['A: Paul Pierce', 'B: Larry Bird', 'C: John Havilcek', 'D: Bill Russell'],
        answer: 'C: John Havilcek'
    },
    {
        question: 'Which Celtic is one of only five NBA players to lead his team in all five major statistical categories for a season?',
        choices: ['A: Dave Cowens', 'B: Bill Russell', 'C: Kevin Garnett', 'D: Larry Bird'],
        answer: 'A: Dave Cowens'
    },
    {
        question: 'Which Boston Celtic won five NBA Most Valuable Player Awards?',
        choices: ['A: Larry Bird', 'B: Bill Russell', 'C: Bob Cousy', 'D: Dave Cowens'],
        answer: 'B: Bill Russell'
    },
    {
        question: 'What is the most points scored by the Celtics (in regulation) in a single game?',
        choices: ['A: 168 Points', 'B: 189 Points', 'C: 163 Points', 'D: 173 Points'],
        answer: 'D: 173 Points'
    },
    {
        question: 'Which Celtic was the first African-American player in the NBA?',
        choices: ['A: K.C Jones', 'B: Bill Russell', 'C: Sam Jones', 'D: Chuck Cooper'],
        answer: 'D: Chuck Cooper'
    },
]; 

let winsScore = 1;
let lossesScore = 1;
let currentQuestionIndex = 0;
let currentAnswer = 0;
let totalQuestions = questions.length;

//Functions
const startGame = () => {
    gameContainer.style.display = 'flex';
    gameMessage.style.display = 'none';
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.choices.forEach((choice, index) => {
        let currentButton = answerButtons[index]
        currentButton.textContent = "" + choice;
    });
    currentAnswer = currentQuestion.answer
    console.log(currentAnswer)
};

const rightAnswer = (evt) => {
    let chosenAnswer = evt.target.textContent;
    console.log(chosenAnswer,currentAnswer)
    if(chosenAnswer === currentAnswer){
        incrementWins()
        return true
    }else {
        incrementLosses()
        return false
    }
};

const incrementWins = () => {
    winsTracker.textContent = winsScore++
    const audioElement = document.createElement('audio'); 
    audioElement.setAttribute('src', 'Audio/BEKLKYL-basketball-26.mp3'); 
    audioElement.play()
};

const incrementLosses = () => {
    lossesTracker.textContent = lossesScore++
    const audioElement = document.createElement('audio'); 
    audioElement.setAttribute('src', 'Audio/mixkit-wrong-answer-bass-buzzer-948.wav'); 
    audioElement.play()
};

const nextQuestion = () => {
    currentQuestionIndex++
    let currentQuestion = questions[currentQuestionIndex];
    currentAnswer = currentQuestion.answer
    console.log(currentAnswer)
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question
        questions[currentQuestionIndex].choices.forEach((choice, index) => {
            let currentButton = answerButtons[index]
            currentButton.textContent = "" + choice;
        })
    }
};


// Event listeners 
startBtn.addEventListener('click', (evt) => {
    startGame();
});

restartBtn.addEventListener('click', (evt) => {
    location.reload();
});

choice1.addEventListener('click', (evt) => {
    rightAnswer(evt); 
});

choice2.addEventListener('click', (evt) => {
    rightAnswer(evt); 
});

choice3.addEventListener('click', (evt) => {
    rightAnswer(evt); 
});

choice4.addEventListener('click', (evt) => {
    rightAnswer(evt); 
});

nextBtn.addEventListener('click', (evt) => {
    nextQuestion();
})

//Directions menu toggle Source - https://www.youtube.com/watch?v=XH5OW46yO8I 
directionsBtn.addEventListener('click', () => {
    modal_container.classList.add('show');
});

modal_close.addEventListener('click', () => {
    modal_container.classList.remove('show');
}); 