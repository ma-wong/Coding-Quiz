// Variables from html
var h1 = document.querySelector('h1');
var startBttn = document.getElementById('start-button');
var h2 = document.querySelector('h2');
var answers = document.getElementById('answers');

timer = 60;
score = 0;
index = 0;

startBttn.addEventListener('click', startQuiz);
document.getElementById('answers').style.display = 'none';

// questions object is array of questions
var questions_with_answers = [
    {
        q: 'What is the best animal?',
        optionA: 'cat',
        optionB: 'cow',
        optionC: 'donkey',
        optionD: 'whale',
        correct: 'optionB'
    },
    {
        q: 'How Stinky is my hammy?',
        optionA: 'very',
        optionB: 'a little bit',
        optionC: 'not at all',
        optionD: 'a cubic fuck ton',
        correct: 'optionD'
    },
    {
        q: 'Where is javascript?',
        optionA: 'a',
        optionB: 'b',
        optionC: 'c',
        optionD: 'd',
        correct: 'a'
    },
    {
        q: 'When is javascript?',
        optionA: 'a',
        optionB: 'b',
        optionC: 'c',
        optionD: 'd',
        correct: 'a'
    },
    {
        q: 'Why is javascript?',
        optionA: 'a',
        optionB: 'b',
        optionC: 'c',
        optionD: 'd',
        correct: 'c'
    }
];


// Starts Quiz
function startQuiz() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('answers').style.display = 'block';
    
    displayQuestion(0);

}

// Checks Answer & logs -1 or +1 for score
function checkAnswer(userAnswer) {
    if (userAnswer === currentQ.correct) {
        score++
        document.getElementById('verify').innerHTML = "Correct!";
    }
    else {
        score--
        document.getElementById('verify').innerHTML = "Wrong! Correct answer: " + currentQ[currentQ.correct];
    }
    index++;
    displayQuestion(index);
}


var optionA = document.getElementById('option-a');
var optionB = document.getElementById('option-b');
var optionC = document.getElementById('option-c');
var optionD = document.getElementById('option-d');


optionA.addEventListener('click', function(event) {
    checkAnswer('optionA');
});
optionB.addEventListener('click', function(event) {
    checkAnswer('optionB');
});
optionC.addEventListener('click', function(event) {
    checkAnswer('optionC');
});
optionD.addEventListener('click', function(event) {
    checkAnswer('optionD');
});

function displayQuestion(index) {
    currentQ = questions_with_answers[index];
    h2.innerHTML = currentQ.q;
    optionA.innerHTML = currentQ.optionA;
    optionB.innerHTML = currentQ.optionB;
    optionC.innerHTML = currentQ.optionC;
    optionD.innerHTML = currentQ.optionD;
}

