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
        optionA: 'A. cat',
        optionB: 'B. cow',
        optionC: 'C. donkey',
        optionD: 'D. whale',
        correct: 'optionB'
    },
    {
        q: 'How Stinky is my hammy?',
        optionA: 'A. very',
        optionB: 'B. a little bit',
        optionC: 'C. not at all',
        optionD: 'D. a cubic fuck ton',
        correct: 'optionD'
    },
    {
        q: 'Which of the following is not a Javascript type?',
        optionA: 'A. result',
        optionB: 'B. string',
        optionC: 'C. nan',
        optionD: 'D. array',
        correct: 'optionA'
    },
    {
        q: 'When is javascript?',
        optionA: 'A.',
        optionB: 'B.',
        optionC: 'C.',
        optionD: 'D.',
        correct: 'optionA'
    },
    {
        q: 'Why is javascript?',
        optionA: 'A. ',
        optionB: 'B. ',
        optionC: 'C. ',
        optionD: 'D. ',
        correct: 'optionC'
    }
];


// Starts Quiz
function startQuiz() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('answers').style.display = 'block';
    
    displayQuestion(0);
    quizFinish();

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
    return;

}


var optionA = document.getElementById('option-a');
var optionB = document.getElementById('option-b');
var optionC = document.getElementById('option-c');
var optionD = document.getElementById('option-d');

// event listeners for each of the answer buttons
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

// Displays question and answers on html
function displayQuestion(index) {
    currentQ = questions_with_answers[index];
    h2.innerHTML = currentQ.q;
    optionA.innerHTML = currentQ.optionA;
    optionB.innerHTML = currentQ.optionB;
    optionC.innerHTML = currentQ.optionC;
    optionD.innerHTML = currentQ.optionD;
}

function quizFinish() {
    h1.textContent = 'All Done!';
    var finalScore = document.createElement('p');
    finalScore.textContent = 'Your final score is ' + score;
    h1.appendChild(finalScore);
    var userInitials = document.createElement('input');
    h1.appendChild(userInitials);

}