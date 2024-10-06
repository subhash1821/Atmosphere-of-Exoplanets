// Define levels, study points, and questions
const levels = [
    {
        title: "Level 4:Atmosphere of Exoplanets.",
        studyPoints: [
            "Some exoplanets have atmospheres that can be studied for chemical composition..",
            "Spectroscopy is used to analyze light from an exoplanet's atmosphere.",
            "The presence of water vapor is a significant indicator of potential habitability..",
            "Extreme atmospheres, like those of gas giants, can have high pressures and temperatures..",
            "Research is ongoing to identify biosignatures in exoplanet atmospheres.",

        ],
        questions: [
            {
                question: "What technique is used to analyze an exoplanet's atmosphere?",
                options: ["Photometry", "Spectroscopy", "Gravimetry", " Microscopy"],
                answer: 1
            },
            {
                question: "Why is water vapor important in studying exoplanets?",
                options: ["It indicates the planet's distance from the star.", "It can suggest the potential for life.", "It determines the planet's mass.", "It affects the planet's color."],
                answer: 1
            },
            {
                question: "What is a characteristic of extreme atmospheres?",
                options: ["They are cold and dry.", "They have low pressure and temperature.", "They can have high pressures and temperatures.", "They are always habitable."],
                answer: 2
            },
            {
                question: "What are biosignatures?",
                options: ["Indicators of non-life", "Evidence of potential life", "Components of stars", "Types of geological formations"],
                answer: 1
            },
            {
                question: "What can studying an exoplanet's atmosphere reveal?",
                options: ["Only its distance from Earth.", "Its color and size",  "The presence of potential life forms", "Its orbit"],
                answer: 2
            }
        ]
        
          
        
          
          
    }
];

// Initialize variables
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

// Start game button event listener
document.getElementById("start-button").addEventListener("click", startGame);

// Start game function
function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("level-container").style.display = "block";
    showStudyMode();
}

// Show study mode function
function showStudyMode() {
    document.getElementById("study-mode").style.display = "block";
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("level-title").innerHTML = levels[currentLevel].title;
    const studyPoints = document.getElementById("study-points");
    studyPoints.innerHTML = "";
    levels[currentLevel].studyPoints.forEach(point => {
        const li = document.createElement("li");
        li.innerHTML = point;
        studyPoints.appendChild(li);
    });
    document.getElementById("quiz-button").addEventListener("click", showQuizMode);
}

// Show quiz mode function
function showQuizMode() {
    document.getElementById("study-mode").style.display = "none";
    document.getElementById("quiz-mode").style.display = "block";
    showQuestion();
}

// Show question function
function showQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");
    question.innerHTML = levels[currentLevel].questions[currentQuestion].question;
    options.innerHTML = "";
    levels[currentLevel].questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = option;
        li.addEventListener("click", () => {
            checkAnswer(index);
        });
        options.appendChild(li);
    });
}

// Check answer function
function checkAnswer(answer) {
    if (answer === levels[currentLevel].questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect.";
    }
    currentQuestion++;
    if (currentQuestion >= levels[currentLevel].questions.length) {
        endLevel();
    } else {
        showQuestion();
    }
}

// End level function
function endLevel() {
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("end-button-container").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerHTML = `Level ${currentLevel + 1} Score: ${score}/${levels[currentLevel].questions.length}`;
    document.getElementById("end-button").addEventListener("click", nextLevel);
}

// Next level function
function nextLevel() {
    currentLevel++;
    currentQuestion = 0;
    score = 0;
    if (currentLevel >= levels.length) {
        alert("Congratulations, you've completed all levels!");
    } else {
        document.getElementById("end-button-container").style.display = "none";
        document.getElementById("score-container").style.display = "none";
        showStudyMode();
    }
}