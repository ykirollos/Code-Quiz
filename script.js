//quiz  Q&A
const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["script", "scripting", "javascript", "js"],
    answer: 0,
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    options: ["The body section", "Both the head section and the body section are correct", "The head section"],
    answer: 1,
  },
  {
    question: "The external Javascript must contain the script tag?",
    options: ["False", "True"],
    answer: 0,
  },
  {
    question: `How do you write "Hello World" in an alert box?`,
    options: [`alertBox("Hello World!");`, `msgBox("Hello World!");`,`alert("Hello World!");`,  `msg("Hello World!");`],
    answer: 2,
  },
];

let timeEl = document.getElementById("countDown");
let currentQuestionIndex = 0;
let correctAnswers = 0;
let timeLeft = 50;
//countdown Timer
function time() {
  var countDown = setInterval(function () {
    timeLeft--;
    timeEl.textContent = `${timeLeft}`;
    if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
      clearInterval(countDown);
      timeEl.textContent = "";
      document.getElementById("currentQ").classList.add("d-none");
      document.getElementById("yourScore").classList.remove("d-none");
      document.getElementById(
        "score"
      ).textContent = `Your score is ${correctAnswers} / ${questions.length}`;
    }
  }, 1000);
}
function startQuiz() {
  document.getElementById("start").classList.add("d-none");
  document.getElementById("currentQ").classList.remove("d-none");
  displayQuestion();
  time();
}
function submit() {
  const pickedAnswer = getPickedAnswer();
  const compareAnswer = pickedAnswer == questions[currentQuestionIndex].answer;
  if (compareAnswer) {
    correctAnswers++;
  } else {
    timeLeft = timeLeft - 20;
  }
  currentQuestionIndex++;
  displayQuestion();
}
function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    clearInterval(countDown);
    return;
  }
  // display Question text
  document.getElementById("currentQ_q").innerHTML =
    questions[currentQuestionIndex].question;

  // display answer options
  document.getElementById("currentQ_a").innerHTML = " ";
  questions[currentQuestionIndex].options.forEach(appendOption);
}

function appendOption(option, index) {
  {
    // append radio button
    const radioBtn = document.createElement("input");
    radioBtn.type = "radio";
    radioBtn.id = option;
    radioBtn.name = "choice";
    radioBtn.value = index;
    document.getElementById("currentQ_a").appendChild(radioBtn);
    // append radio button label
    const radioBtnLabel = document.createElement("label");
    radioBtnLabel.innerHTML = option;
    radioBtnLabel.appendChild(radioBtn);
    document.getElementById("currentQ_a").appendChild(radioBtnLabel);
  }
}
//Getting the selected answer
function getPickedAnswer() {
  var answer = document.getElementsByName("choice");

  for (i = 0; i < answer.length; i++) {
    if (answer[i].checked) return answer[i].value;
  }
}

function dasScore() {
  //getplayer's name
  const nameEl = document.getElementById("playerName").value;
  //appending score to table
  const tbodyEl = document.querySelector("tbody");
  tbodyEl.innerHTML += `
<tr>
  <td>${nameEl}</td>
  <td>${correctAnswers}</td>
</tr>
`;
}
function displaySB() {
  document.getElementById("scoreBoard").classList.remove("d-none");
  document.getElementById("quizzz").classList.add("d-none");
  clearInterval(countDown);
  return;
}
function goBack() {
  location.reload();
}
function x_Row() {
  if (document.getElementById("leTableau").rows.length >= 2) {
    document.getElementById("leTableau").deleteRow(1);
    console.log("emsa7");
  }
}
