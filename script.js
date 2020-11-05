// Variables from html
var h1 = document.querySelector('h1');
var startBttn = document.getElementById('start-button');
var h2 = document.querySelector('h2');
var answers = document.getElementById('answers');
var endHeader = document.getElementById('end-header');
var highScores = document.getElementById('view-highscores');
var timer = document.getElementById('timer');

var secondsLeft = 60;
score = 0;
index = 0;

// Adding Text Content
highScores.textContent = 'View Highscores';
timer.textContent = "Time Remaining: " + secondsLeft;

// Setting attributes to my variables
highScores.setAttribute('href', 'highscores.html');
highScores.setAttribute('style', 'font-size:15pt;');

timer.setAttribute('style', 'font-size:15pt; text-align:right');

startBttn.addEventListener('click', startQuiz);
document.getElementById('answers').style.display = 'none';

// questions object is array of questions
var questions_with_answers = [
    {
        q: 'Do you want to meet singles in your area?<hr>',
        optionA: 'A. no',
        optionB: 'B. yes, but dont tell anyone',
        optionC: 'C. maybe',
        optionD: 'D. definitely',
        correct: 'optionB'
    },
    {
        q: 'How many Indian princesses would you like to support?<hr>',
        optionA: 'A. 1',
        optionB: 'B. 90',
        optionC: 'C. 300',
        optionD: 'D. as many as my bank account will allow',
        correct: 'optionD'
    },
    {
        q: 'Who do you bank with?<hr>',
        optionA: 'A. Wells Fargo',
        optionB: 'B. Chase',
        optionC: 'C. City Bank',
        optionD: 'D. Bank of America',
        correct: 'optionA'
    },
    {
        q: 'How many years of bad luck will you have if you dont complete this quiz?<hr>',
        optionA: 'A. 8,004,000 years',
        optionB: 'B. 10 years',
        optionC: 'C. 257 years',
        optionD: 'D. 39',
        correct: 'optionA'
    },
    {
        q: 'How would you like to submit your social security number?<hr>',
        optionA: 'A. through email',
        optionB: 'B. over the phone',
        optionC: 'C. via carrier pigeon',
        optionD: 'D. through text message',
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
    
    timeCountdown();
    displayQuestion(0);

}


// time remaining function
function timeCountdown() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time Remaining: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
      }
  
    }, 1000);
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
        document.getElementById('verify').innerHTML = "<hr>Wrong! <br>Correct answer: " + currentQ[currentQ.correct];
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
    
    endHeader.textContent = "If you're reading this, it's too late.";
    endHeader.setAttribute('style', "font-family: 'Creepster', cursive;")
    var finalScore = document.createElement('p');
    finalScore.textContent = 'Your final score is: ' + score;
    endHeader.appendChild(finalScore);

    var userInput = document.createElement('input');
    endHeader.appendChild(userInput);

    var submitButton = document.createElement('button');
    submitButton.textContent = "Submit Score";
    endHeader.appendChild(submitButton);
    
    
    submitButton.addEventListener('click', function() {
        var scoreInfo = {
            userInitials: userInput.value,
            score: score
        };
        var scoreArray = [];
        if (localStorage.getItem('scoreInfo') === null) {
            scoreArray.push(scoreInfo);
            localStorage.setItem('scoreInfo', JSON.stringify(scoreArray));
        }
        else {
            var savedScores = JSON.parse(localStorage.getItem('scoreInfo'));
            savedScores.push(scoreInfo);
            savedScores.sort(function (a, b) {
                b.score - a.score;
            });
            localStorage.setItem('scoreInfo', JSON.stringify(savedScores));
        }
    })

}
