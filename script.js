// Variables from html
var h1 = document.querySelector('h1');
var startBttn = document.getElementById('start-button');
var h2 = document.querySelector('h2');
var answers = document.getElementById('answers');
var endHeader = document.getElementById('end-header');
var highScores = document.getElementById('view-highscores');
var timer = document.getElementById('timer');

var time = 60;
score = 0;
index = 0;

// Adding Text Content
highScores.textContent = 'View Highscores';
timer.textContent = "Time Remaining: " + time;

// Setting attributes to my variables
highScores.setAttribute('href', 'highscores.html');
highScores.setAttribute('style', 'font-size:15pt;');

timer.setAttribute('style', 'font-size:15pt; float:right;');

startBttn.addEventListener('click', startQuiz);
document.getElementById('answers').style.display = 'none';
// highScores.style.display = 'block';
// timer.style.display = 'block';

// questions object is array of questions
var questions_with_answers = [
    {
        q: 'What is the best animal?<hr>',
        optionA: 'A. cat',
        optionB: 'B. cow',
        optionC: 'C. donkey',
        optionD: 'D. whale',
        correct: 'optionB'
    },
    {
        q: 'What color is the sky?<hr>',
        optionA: 'A. red',
        optionB: 'B. green',
        optionC: 'C. yellow',
        optionD: 'D. blue',
        correct: 'optionD'
    },
    {
        q: 'Which of the following is not a Javascript type?<hr>',
        optionA: 'A. result',
        optionB: 'B. string',
        optionC: 'C. nan',
        optionD: 'D. array',
        correct: 'optionA'
    },
    {
        q: 'When is javascript?<hr>',
        optionA: 'A.',
        optionB: 'B.',
        optionC: 'C.',
        optionD: 'D.',
        correct: 'optionA'
    },
    {
        q: 'Why is javascript?<hr>',
        optionA: 'A. ',
        optionB: 'B. ',
        optionC: 'C. ',
        optionD: 'D. ',
        correct: 'optionC'
    }
];

var optionA = document.getElementById('option-a');
var optionB = document.getElementById('option-b');
var optionC = document.getElementById('option-c');
var optionD = document.getElementById('option-d');


// Starts Quiz
function startQuiz() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('answers').style.display = 'block';
    
    displayQuestion(0);

}


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


// Checks Answer & logs -1 or +1 for score
function checkAnswer(userAnswer) {
    console.log(userAnswer);
    if (index > 3) {
        quizFinish();
        return;
    }
    if (userAnswer === currentQ.correct) {
        score++
        document.getElementById('verify').innerHTML = "<hr>Correct!";
    }
    else {
        score--
        document.getElementById('verify').innerHTML = "<hr>Wrong! Correct answer: " + currentQ[currentQ.correct];
    }
    index++;
    displayQuestion(index);
}

// Display final score and input for initials
function quizFinish() {
    document.getElementById('end-page').style.display = 'block';
    document.getElementById('answers').style.display = 'none';
    document.getElementById('question-prompts').style.display = 'none';
    document.getElementById('verify').style.display = 'none';
    
    endHeader.textContent = 'All Done!';
    var finalScore = document.createElement('p');
    finalScore.textContent = 'Your final score is: ' + score;
    endHeader.appendChild(finalScore);

    var userInput = document.createElement('input');
    endHeader.appendChild(userInput);

    var submitButton = document.createElement('button');
    submitButton.textContent = "Submit Score";
    endHeader.appendChild(submitButton);
    
    console.log(score);
    
    submitButton.addEventListener('click', function() {
        var userInitials = userInput.value;
        localStorage.setItem(userInitials, score);
    })

}
