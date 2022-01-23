// Global variables 
const directionsBtn = document.querySelector('#directions'); 
const modal_container = document.querySelector('#modal_container');
const modal_close = document.querySelector('#close');
const restartBtn = document.querySelector('#restart'); 

// Question class constructor 
class Question {
    constructor(question, answer, wrong1, wrong2, wrong3){
        this.question = question; 
        this.answer = answer; 
        this.wrong1 = wrong1; 
        this.wrong2 = wrong2; 
        this.wrong3 = wrong3; 
    }
}

// Instances of Question class 
let question1 = new Question(
    'What year were the Boston Celtics founded?', 
    '1946', 
    '1956', 
    '1966', 
    '1976'); 

let question2 = new Question(
    'What is the name of the of the Boston Celtics Mascot?',
    'Lucky',
    'Shamrock',
    'Irish', 
    'Banshee'); 

let question3 = new Question(
    'Which Celtics player grabbed 50 rebounds in a single game?', 
    'Bill Russell', 
    'Dave Cowens', 
    'Robert Parish', 
    'Kevin Garnett'); 

let question4 = new Question(
    'What did Celtics coach Red Auerbach often do when he thought victory was assured?', 
    'Smoke A Cigar', 
    'Have A Beer', 
    'Take Off His Shoes', 
    'Take Off His Tie'); 

let question5 = new Question(
    'Which Celtics player scored 60 points in a single game?', 
    'Larry Bird', 
    'Paul Pierce', 
    'Bob Cousy', 
    'John Havlicek'); 

let question6 = new Question(
    'Who is the Boston Celtics all-time points leader?', 
    'John Havilcek', 
    'Larry Bird', 
    'Paul Pierce', 
    'Bill Russell');

let question7 = new Question(
    'Which Celtic is one of only five NBA players to lead his team in all five major statistical categories for a season?', 
    'Dave Cowens', 
    'Bill Russell', 
    'Kevin Garnett', 
    'Larry Bird'); 

let question8 = new Question(
    'Which Boston Celtic won five NBA Most Valuable Player Awards?', 
    'Bill Russell', 
    'Larry Bird', 
    'Bob Cousy', 
    'Dave Cowens'); 

let question9 = new Question(
    'What is the most points scored by the Celtics (in regulation) in a single game?', 
    '173 Points', 
    '189 Points', 
    '163 Points', 
    '168 Points'); 

let question10 = new Question(
    'Which Celtic was the first African-American player in the NBA?', 
    'Chuck Cooper', 
    'Bill Russell', 
    'K.C Jones', 
    'Sam Jones'); 

let question11 = new Question(
    'How many NBA championships did the Celtics win during the 20th century?', 
    '16', 
    '15', 
    '17', 
    '10'); 

let question12 = new Question(
    'Which Celtics coach had the highest winning percentage?', 
    'K.C Jones', 
    'Doc Rivers', 
    'Red Auerbach', 
    'M.L Carr');  

let question13 = new Question(
    'Who was the first Celtic to win the NBA Sixth Man of the Year Award?', 
    'Kevin McHale', 
    'Bill Walton', 
    'Marcus Smart',
    'Dennis Smith'); 

let question14 = new Question(
    'Who was the first Celtic with more than 200 blocked shots in a season?',
    'Robert Parish', 
    'Kevin Garnett', 
    'Kendrick Perkins', 
    'Bill Russell'); 

let question15 = new Question(
    'Who was the first Celtic with 1,000 career three-pointers?', 
    'Paul Pierce', 
    'Ray Allen', 
    'Antoine Walker', 
    'Larry Bird'); 

let question16 = new Question(
    'What is the fewest field goals the Celtics ever allowed an opposing team in a game?', 
    '16 Field Goals', 
    '22 Field Goals', 
    '13 Field Goals', 
    '18 Field Goals'); 

let questionArray = [
    question1, 
    question2,
    question3,
    question4,
    question5,
    question6,
    question7, 
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
    question14,
    question15,
    question16 
]
console.log(questionArray)

//Function for Random Question 
const generateQuestion = () => {
      let randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)]; 
      return randomQuestion; 
    }
    
    console.log(generateQuestion());


//Directions menu toggle Source - https://www.youtube.com/watch?v=XH5OW46yO8I 
    directionsBtn.addEventListener('click',() =>{
        modal_container.classList.add('show'); 
    }); 

    modal_close.addEventListener('click',() =>{
        modal_container.classList.remove('show'); 
    }); 
