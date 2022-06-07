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
const variableMessage = document.querySelector('#variable-message-container');
const variableMessageText = document.querySelector('#variable-message');
const topButtons = Array.from(document.querySelectorAll('.top-buttons'));
const winGiphy = document.querySelector('.win-giphy-embed')
const loseGiphy = document.querySelector('.lose-giphy-embed')
let winsScore = 1;
let lossesScore = 1;
let currentQuestionIndex = 0;
let currentAnswer = 0;

//Questions array
const questions = [
    {
        question: 'What year were the Boston Celtics founded?',
        choices: ['☘️: 1946', '☘️: 1956', '☘️: 1966', '☘️: 1976'],
        answer: '☘️: 1946'
    },
    {
        question: 'What is the name of the Boston Celtics Mascot?',
        choices: ['☘️: Irish', '☘️: Shamrock', '☘️: Lucky', '☘️: Banshee'],
        answer: '☘️: Lucky'
    },
    {
        question: 'Which Celtics player grabbed 50 rebounds in a single game?',
        choices: ['☘️: Kevin Garnett', '☘️: Dave Cowens', '☘️: Robert Parish', '☘️: Bill Russell'],
        answer: '☘️: Bill Russell'
    },
    {
        question: 'What did Celtics coach Red Auerbach often do when he thought victory was assured?',
        choices: ['☘️: Take Off His Shoes', '☘️: Have A Beer', '☘️: Smoke A Cigar', '☘️: Take Off His Tie'],
        answer: '☘️: Smoke A Cigar'
    },
    {
        question: 'Which Celtics player scored 60 points in a single game?',
        choices: ['☘️: Larry Bird', '☘️: Paul Pierce', '☘️: Jasyon Tatum', '☘️: John Havlicek'],
        answer: '☘️: Larry Bird'
    },
    {
        question: 'Who is the Boston Celtics all-time points leader?',
        choices: ['☘️: Paul Pierce', '☘️: Larry Bird', '☘️: John Havilcek', '☘️: Bill Russell'],
        answer: '☘️: John Havilcek'
    },
    {
        question: 'Which Celtic is one of only five NBA players to lead his team in all five major statistical categories for a season?',
        choices: ['☘️: Dave Cowens', '☘️: Bill Russell', '☘️: Kevin Garnett', '☘️: Larry Bird'],
        answer: '☘️: Dave Cowens'
    },
    {
        question: 'Which Boston Celtic won five NBA Most Valuable Player Awards?',
        choices: ['☘️: Larry Bird', '☘️: Bill Russell', '☘️: Bob Cousy', '☘️: Dave Cowens'],
        answer: '☘️: Bill Russell'
    },
    {
        question: 'What is the most points scored by the Celtics (in regulation) in a single game?',
        choices: ['☘️: 168 Points', '☘️: 189 Points', '☘️: 163 Points', '☘️: 173 Points'],
        answer: '☘️: 173 Points'
    },
    {
        question: 'Which Celtic was the first African-American player in the NBA?',
        choices: ['☘️: K.C Jones', '☘️: Bill Russell', '☘️: Sam Jones', '☘️: Chuck Cooper'],
        answer: '☘️: Chuck Cooper'
    },
    {
        question: 'How many NBA championships did the Celtics win during the 20th century?',
        choices: ['☘️: 16', '☘️: 10', '☘️: 18', '☘️: 13'],
        answer: '☘️: 16'
    },
    {
        question: 'Which Celtics coach had the highest winning percentage?',
        choices: ['☘️: Red Auerbach', '☘️: Doc Rivers', '☘️: K.C Jones', '☘️: M.L Carr'],
        answer: '☘️: K.C Jones'
    },
    {
        question: 'Who was the first Celtic to win the NBA Sixth Man of the Year Award?',
        choices: ['☘️: Marcus Smart', '☘️: Bill Walton', '☘️: Kevin McHale', '☘️: Dennis Johnson'],
        answer: '☘️: Kevin McHale'
    },
    {
        question: 'Who was the first Celtic with 1,000 career three-pointers?',
        choices: ['☘️: Paul Pierce', '☘️: Ray Allen', '☘️: Larry Bird', '☘️: Antoine Walker'],
        answer: '☘️: Paul Pierce'
    },
    {
        question: 'Who was the first Celtic with more than 200 blocked shots in a season?',
        choices: ['☘️: Kendrick Perkins', '☘️: Bill Russell', '☘️: Kevin Garnett', '☘️: Robert Parish'],
        answer: '☘️: Robert Parish'
    },
];

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
};

const rightAnswer = (evt) => {
    let chosenAnswer = evt.target.textContent;
    if (chosenAnswer === currentAnswer) {
        incrementWins()
        disableChoices(true)
        disableStartButton(true)
    } else {
        incrementLosses()
        disableChoices(true)
        disableStartButton(true)
    }
};

const disableChoices = (choice) => { /// function worked on by Josh and I, during a one on one
    answerButtons.forEach(answerButton => {
        if (choice === true) {
            answerButton.disabled = true;
        } else {
            answerButton.disabled = false;
        }
        // answerButton.disabled = choice === "yes"? true : false; 
    })
};

const disableNextButton = (choice) => {
    if (choice === true) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
};

const disableStartButton = (choice) => {
    if (choice === true) {
        startBtn.disabled = true;
    } else {
        startBtn.disabled = false;
    }
};

const incrementWins = () => {
    winsTracker.textContent = winsScore++
    const audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/BEKLKYL-basketball-26.mp3');
    audioElement.play()
    variableMessageText.textContent = 'Nice Shot 🏀! Click Next To Keep Balling!'
    variableMessage.style.display = 'flex'
    if (winsTracker.textContent > 11) {
        variableMessageText.textContent = 'You Have Won 🏆! Your Celtics Knowledge Is Impressive.'
        questionElement.textContent = 'Press Restart To Play Again!'
        choice1.style.display = 'none';
        choice2.style.display = 'none';
        choice3.style.display = 'none';
        choice4.style.display = 'none';
        winGiphy.style.display = 'flex';
        winGiphy.style.margin = '7%';
    }
};

const incrementLosses = () => {
    lossesTracker.textContent = lossesScore++
    const audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/mixkit-wrong-answer-bass-buzzer-948.wav');
    audioElement.play()
    variableMessageText.textContent = 'You Missed 👎🏽! Click Next To Keep Balling!'
    variableMessage.style.display = 'flex'
    if (lossesTracker.textContent > 2) {
        variableMessageText.textContent = 'You Have Lost 🚫 🏆!'
        questionElement.textContent = 'Press Restart To Play Again!'
        choice1.style.display = 'none';
        choice2.style.display = 'none';
        choice3.style.display = 'none';
        choice4.style.display = 'none';
        loseGiphy.style.display = 'flex';
        loseGiphy.style.margin = '7%';
    }
};

const nextQuestion = () => {
    disableChoices(false)
    currentQuestionIndex++
    let currentQuestion = questions[currentQuestionIndex];
    currentAnswer = currentQuestion.answer
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question
        questions[currentQuestionIndex].choices.forEach((choice, index) => {
            let currentButton = answerButtons[index]
            currentButton.textContent = "" + choice;
        })
    }
    if (winsTracker.textContent >= 11 ||lossesTracker.textContent >= 3 ) {
        disableNextButton(true)
    }
    variableMessage.style.display = 'none'
};



// Event listeners 
startBtn.addEventListener('click', (evt) => {
    startGame();
});

restartBtn.addEventListener('click', (evt) => {
   window.location.reload();
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