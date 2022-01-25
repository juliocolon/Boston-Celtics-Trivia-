// Global variables 
const directionsBtn = document.querySelector('#directions'); 
const modal_container = document.querySelector('#modal_container');
const modal_close = document.querySelector('#close');
const startBtn = document.querySelector('#start')
const restartBtn = document.querySelector('#restart'); 
const gameContainer = document.querySelector('.row');
const gameMessage = document.querySelector('#game-message');
const questionElement = document.querySelector('#question'); 
const answerButtons = Array.from(document.querySelectorAll('.answer-buttons'));
console.log(answerButtons)

//Questions array
let questions = [
    {
        question:'What year were the Boston Celtics founded?',
        choices:['1946','1956','1966','1976'],
        answer: '1946'
    },
    {
        question:'What is the name of the of the Boston Celtics Mascot?',
        choices:['Irish','Shamrock','Lucky','Banshee'],
        answer: 'Lucky'
    },
    {
        question:'Which Celtics player grabbed 50 rebounds in a single game?',
        choices:['Kevin Garnett','Dave Cowens','Robert Parish','Bill Russell'],
        answer: 'Bill Russell'
    },
    {
        question:'What did Celtics coach Red Auerbach often do when he thought victory was assured?',
        choices:['Take Off His Shoes','Have A Beer','Smoke A Cigar','Take Off His Tie'],
        answer: 'Smoke A Cigar'
    },
     {
        question:'Which Celtics player scored 60 points in a single game?',
        choices:['Larry Bird','Paul Pierce','Jasyon Tatum','John Havlicek'],
        answer: 'Larry Bird'
    },
    {
        question:'Who is the Boston Celtics all-time points leader?',
        choices:['Paul Pierce','Larry Bird','John Havilcek','Bill Russell'],
        answer: 'John Havilcek'
    },
    {
        question:'Which Celtic is one of only five NBA players to lead his team in all five major statistical categories for a season?',
        choices:['Dave Cowens','Bill Russell','Kevin Garnett','Larry Bird'],
        answer: 'Dave Cowens'
    },
    {
        question:'Which Boston Celtic won five NBA Most Valuable Player Awards?',
        choices:['Larry Bird','Bill Russell','Bob Cousy','Dave Cowens'],
        answer: 'Bill Russell'
    },
    {
        question:'What is the most points scored by the Celtics (in regulation) in a single game?',
        choices:['168 Points','189 Points','163 Points', '173 Points'],
        answer: '173 Points'
    },
    {
        question:'Which Celtic was the first African-American player in the NBA?',
        choices:['K.C Jones','Bill Russell','Sam Jones','Chuck Cooper'],
        answer: 'Chuck Cooper'
    },
]

let score = 0;
let currentQuestionIndex = 0; 
let correctQuestions = 0; 
let currentAnswerIndex = 0; 
let totalQuestions = questions.length; 

//Function for starting the game 
const startGame = () => {
gameContainer.style.display = 'flex';
gameMessage.style.display = 'none';
getNewQuestion();
}

const getNewQuestion = () => {
   let currentQuestion = questions[currentQuestionIndex]; 
   console.log(currentQuestion)
   console.log(currentQuestion.question)
   questionElement.textContent = currentQuestion.question; 
      currentQuestion.choices.forEach(choice => {
     let currentButton = answerButtons[currentAnswerIndex]
       currentButton.textContent = choice;
     });    

};



// Event listeners 
startBtn.addEventListener('click', (evt) => {
startGame();
});

restartBtn.addEventListener('click', (evt) => {
    location.reload(); 
})

//Directions menu toggle Source - https://www.youtube.com/watch?v=XH5OW46yO8I 
 directionsBtn.addEventListener('click',() =>{
        modal_container.classList.add('show'); 
    }); 

 modal_close.addEventListener('click',() =>{
        modal_container.classList.remove('show'); 
    }); 