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
      question: "Which is NOT one of the five pillars of the Criminal Justice System?",
      answers: [
        "Law Enforcement",
        "Prosecution",
        "Court",
        "Legislature"
      ],
      correct: 3
    },

    {
      question: "Who generally represents the State in criminal proceedings?",
      answers: [
        "The Prosecutor",
        "The Victim",
        "The Witness",
        "The Accused"
      ],
      correct: 0
    },

    {
      question: "What is the purpose of a preliminary investigation?",
      answers: [
        "To determine if there is sufficient basis to hold the respondent for trial.",
        "To automatically convict the accused.",
        "To determine the punishment immediately.",
        "To replace the court trial."
      ],
      correct: 0
    },

    {
      question: "What is the highest court in the Philippines?",
      answers: [
        "Regional Trial Court",
        "Court of Appeals",
        "Supreme Court",
        "Municipal Trial Court"
      ],
      correct: 2
    },

    {
      question: "What is judicial power mainly concerned with?",
      answers: [
        "Making laws",
        "Settling actual controversies involving legally demandable rights",
        "Conducting elections",
        "Collecting taxes"
      ],
      correct: 1
    },

    {
      question: "What is jurisdiction?",
      answers: [
        "The geographical location of a crime",
        "The power or authority of a court to hear and decide a case",
        "The punishment given to an offender",
        "The process of investigating a crime"
      ],
      correct: 1
    },

    {
      question: "What is venue?",
      answers: [
        "The power of the court",
        "The punishment imposed by the court",
        "The geographical area where a case may be heard",
        "The evidence presented in court"
      ],
      correct: 2
    },

    {
      question: "What is appellate jurisdiction?",
      answers: [
        "The power to hear a case for the first time",
        "The power of a higher court to review a decision of a lower court",
        "The power to investigate a crime",
        "The power to create criminal laws"
      ],
      correct: 1
    },

    {
      question: "How many members compose the Supreme Court under the 1987 Constitution?",
      answers: [
        "10",
        "12",
        "15",
        "20"
      ],
      correct: 2
    }

  ];


  // =========================
  // QUIZ VARIABLES
  // =========================

  let currentQuestion = 0;
  let score = 0;
  let answered = false;
  let quizFinished = false;


  // =========================
  // QUIZ ELEMENTS
  // =========================

  const questionNumber =
    document.getElementById("question-number");

  const scoreDisplay =
    document.getElementById("score");

  const questionDisplay =
    document.getElementById("question");

  const answersDisplay =
    document.getElementById("answers");

  const nextButton =
    document.getElementById("next-btn");

  const resultDisplay =
    document.getElementById("result");


  // Stop if quiz elements do not exist
  if (
    !questionNumber ||
    !scoreDisplay ||
    !questionDisplay ||
    !answersDisplay ||
    !nextButton ||
    !resultDisplay
  ) {
    return;
  }


  // =========================
  // SHOW QUESTION
  // =========================

  function showQuestion() {

    answered = false;
    quizFinished = false;

    const question = questions[currentQuestion];

    questionNumber.textContent =
      "Question " +
      (currentQuestion + 1) +
      " of " +
      questions.length;

    scoreDisplay.textContent =
      "Score: " + score;

    questionDisplay.textContent =
      question.question;

    answersDisplay.innerHTML = "";

    resultDisplay.textContent = "";

    nextButton.style.display = "block";
    nextButton.textContent = "Next Question →";
    nextButton.disabled = false;

    question.answers.forEach(function (answer, index) {

      const button =
        document.createElement("button");

      button.type = "button";
      button.textContent = answer;
      button.className = "answer-btn";

      button.addEventListener("click", function () {

        checkAnswer(index, button);

      });

      answersDisplay.appendChild(button);

    });

  }


  // =========================
  // CHECK ANSWER
  // =========================

  function checkAnswer(selected, selectedButton) {

    if (answered || quizFinished) {
      return;
    }

    answered = true;

    const correct =
      questions[currentQuestion].correct;

    const buttons =
      document.querySelectorAll(".answer-btn");


    buttons.forEach(function (button) {

      button.disabled = true;

    });


    if (selected === correct) {

      score++;

      selectedButton.classList.add("correct");

      resultDisplay.textContent =
        "Correct! Good job!";

    } else {

      selectedButton.classList.add("wrong");

      buttons[correct].classList.add("correct");

      resultDisplay.textContent =
        "Incorrect. Review the lesson and try again.";

    }


    scoreDisplay.textContent =
      "Score: " + score;


    // Last question
    if (currentQuestion === questions.length - 1) {

      nextButton.textContent =
        "View Final Score";

      nextButton.style.display =
        "block";

    }

  }


  // =========================
  // NEXT QUESTION
  // =========================

  function nextQuestion() {

    if (!answered) {
      return;
    }


    if (currentQuestion < questions.length - 1) {

      currentQuestion++;

      showQuestion();

    } else {

      showFinalScore();

    }

  }


  // =========================
  // FINAL SCORE
  // =========================

  function showFinalScore() {

    quizFinished = true;

    questionNumber.textContent =
      "Challenge Complete!";

    questionDisplay.textContent =
      "Your final score is " +
      score +
      " out of " +
      questions.length +
      ".";

    answersDisplay.innerHTML = "";

    resultDisplay.textContent =
      getScoreMessage();

    nextButton.textContent =
      "Try Again";

    nextButton.style.display =
      "block";

  }


  // =========================
  // SCORE MESSAGE
  // =========================

  function getScoreMessage() {

    const percentage =
      (score / questions.length) * 100;


    if (percentage === 100) {

      return "Perfect score! Excellent work!";

    }

    if (percentage >= 80) {

      return "Great job! You have a strong understanding of CLJ 1.";

    }

    if (percentage >= 60) {

      return "Good effort! Review a few lessons and try again.";

    }

    return "Keep studying! Review the lessons and try the challenge again.";

  }


  // =========================
  // RESTART QUIZ
  // =========================

  function restartQuiz() {

    currentQuestion = 0;
    score = 0;
    answered = false;
    quizFinished = false;

    showQuestion();

  }


  // =========================
  // NEXT BUTTON
  // =========================

  nextButton.addEventListener("click", function () {

    if (quizFinished) {

      restartQuiz();

    } else {

      nextQuestion();

    }

  });


  // =========================
  // START QUIZ
  // =========================

  showQuestion();


  console.log(
    "CLJ 1 Website - BSCRIM I Block A3"
  );

});