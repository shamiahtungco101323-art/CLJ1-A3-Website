// CLJ 1 - BSCRIM Block A3

document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // SMOOTH NAVIGATION
  // =========================

  const links = document.querySelectorAll('nav a[href^="#"]');

  links.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });


  // =========================
  // OPEN / CLOSE TOPICS
  // =========================

  const topics = document.querySelectorAll("details.topic");

  topics.forEach(function (topic) {

    topic.addEventListener("toggle", function () {

      if (topic.open) {

        topic.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });

      }

    });

  });


  // =========================
  // CLJ 1 CHALLENGE QUIZ
  // =========================

  const questions = [
  {
    question: "What does 'Nullum crimen nulla poena sine lege' mean?",
    answers: [
      "There is no crime where there is no law punishing it.",
      "Everyone is guilty until proven innocent.",
      "All crimes must be punished.",
      "Justice must always be equal."
    ],
    correct: 0
  },

  {
    question: "What are the five pillars of the Criminal Justice System?",
    answers: [
      "Police, Court, Jail, Family, School",
      "Law Enforcement, Prosecution, Court, Correction, Community",
      "Police, Judge, Lawyer, Prison, Government",
      "Court, Media, Police, School, Community"
    ],
    correct: 1
  },

  {
    question: "Which branch of government exercises judicial power?",
    answers: [
      "Executive",
      "Legislative",
      "Judiciary",
      "Local Government"
    ],
    correct: 2
  },

  {
    question: "What is a crime?",
    answers: [
      "An act or omission punishable by public laws.",
      "Any mistake made by a person.",
      "A disagreement between two people.",
      "An act that is always accepted by society."
    ],
    correct: 0
  },

  {
    question: "What is a person called when a case is already pending before the court?",
    answers: [
      "Person of Interest",
      "Suspect",
      "Respondent",
      "Accused"
    ],
    correct: 3
  },

  {
    question: "What is preliminary investigation mainly used to determine?",
    answers: [
      "The final punishment of the accused.",
      "Whether there is sufficient basis to hold the respondent for trial.",
      "Whether a law should be changed.",
      "Who will become the judge."
    ],
    correct: 1
  },

  {
    question: "What is prosecution?",
    answers: [
      "The process of bringing a criminal action before the court.",
      "The process of creating a new law.",
      "The process of arresting every suspect.",
      "The punishment given to a criminal."
    ],
    correct: 0
  },

  {
    question: "What is jurisdiction?",
    answers: [
      "The punishment given by the court.",
      "The geographical location of a crime.",
      "The authority of a court to hear and decide a case.",
      "The evidence presented in court."
    ],
    correct: 2
  },

  {
    question: "What is venue?",
    answers: [
      "The authority of the court.",
      "The geographical area where a case may be heard.",
      "The final decision of the judge.",
      "The punishment for an offense."
    ],
    correct: 1
  },

  {
    question: "How many members compose the Supreme Court under the 1987 Constitution?",
    answers: [
      "9 members",
      "12 members",
      "15 members",
      "21 members"
    ],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const questionNumberElement = document.getElementById("question-number");
const scoreElement = document.getElementById("score");

function showQuestion() {
  answered = false;

  const current = questions[currentQuestion];

  questionElement.textContent = current.question;

  questionNumberElement.textContent =
    "Question " + (currentQuestion + 1) +
    " of " + questions.length;

  scoreElement.textContent = "Score: " + score;

  resultElement.textContent = "";

  answersElement.innerHTML = "";

  nextButton.style.display = "none";

  current.answers.forEach(function(answer, index) {

    const button = document.createElement("button");

    button.textContent = answer;
    button.className = "answer-btn";
    button.type = "button";

    button.addEventListener("click", function() {
      checkAnswer(index, button);
    });

    answersElement.appendChild(button);
  });
}

function checkAnswer(selectedIndex, selectedButton) {

  if (answered) return;

  answered = true;

  const current = questions[currentQuestion];

  const answerButtons =
    document.querySelectorAll(".answer-btn");

  answerButtons.forEach(function(button) {
    button.disabled = true;
  });

  if (selectedIndex === current.correct) {

    score++;

    selectedButton.classList.add("correct");

    resultElement.textContent = "Correct! Good job!";

  } else {

    selectedButton.classList.add("wrong");

    answerButtons[current.correct].classList.add("correct");

    resultElement.textContent =
      "Incorrect. The correct answer is highlighted.";
  }

  scoreElement.textContent = "Score: " + score;

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", function() {

  if (!answered) return;

  currentQuestion++;

  if (currentQuestion < questions.length) {

    showQuestion();

  } else {

    showFinalScore();
  }
});

function showFinalScore() {

  questionElement.textContent =
    "Challenge Complete! 🎉";

  answersElement.innerHTML = "";

  questionNumberElement.textContent =
    "Quiz Finished!";

  scoreElement.textContent =
    "Final Score: " + score + " / " + questions.length;

  resultElement.textContent =
    "Great job! You completed the CLJ 1 Challenge.";

  nextButton.textContent = "Try Again ↻";

  nextButton.style.display = "block";

  nextButton.onclick = function() {

    currentQuestion = 0;
    score = 0;
    nextButton.textContent = "Next Question →";

    nextButton.onclick = null;

    showQuestion();
  };
}

showQuestion();