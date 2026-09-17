const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


const questions = [
  {
    question: "What is the main function of the Judiciary?",
    choices: [
      "To interpret and apply the law",
      "To create all government agencies",
      "To collect taxes",
      "To conduct elections"
    ],
    answer: 0
  },
  {
    question: "What does jurisdiction mean?",
    choices: [
      "The power or authority of a court to hear and decide a case",
      "The punishment given to an accused",
      "The name of a police station",
      "The process of making a law"
    ],
    answer: 0
  },
  {
    question: "Which is the highest court in the Philippines?",
    choices: [
      "Regional Trial Court",
      "Court of Appeals",
      "Supreme Court",
      "Municipal Trial Court"
    ],
    answer: 2
  },
  {
    question: "What happens during arraignment?",
    choices: [
      "The accused is formally informed of the charge and enters a plea",
      "The judge writes a new law",
      "The accused automatically receives a sentence",
      "The case is automatically dismissed"
    ],
    answer: 0
  },
  {
    question: "What is appellate jurisdiction?",
    choices: [
      "The power to review decisions of a lower court",
      "The power to arrest a person",
      "The power to create laws",
      "The power to collect taxes"
    ],
    answer: 0
  },
  {
    question: "Which court is known as an anti-graft court?",
    choices: [
      "Sandiganbayan",
      "Court of Appeals",
      "Municipal Trial Court",
      "Supreme Court"
    ],
    answer: 0
  },
  {
    question: "What may a court issue after considering the evidence?",
    choices: [
      "A judgment",
      "A driver's license",
      "A tax return",
      "A passport"
    ],
    answer: 0
  },
  {
    question: "What does an acquittal generally mean?",
    choices: [
      "The accused is found not guilty",
      "The accused is automatically imprisoned",
      "The case must always be appealed",
      "The accused becomes a judge"
    ],
    answer: 0
  }
];


let currentQuestion = 0;
let score = 0;
let selected = false;

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");


function loadQuestion() {
  const q = questions[currentQuestion];

  selected = false;

  questionNumber.textContent =
    "QUESTION " + String(currentQuestion + 1).padStart(2, "0");

  questionText.textContent = q.question;

  feedback.textContent = "";

  choicesBox.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");

    button.className = "choice";
    button.textContent = choice;
    button.dataset.index = index;

    button.addEventListener("click", () => selectAnswer(button, index));

    choicesBox.appendChild(button);
  });

  progressText.textContent =
    "Question " + (currentQuestion + 1) + " of " + questions.length;

  progressBar.style.width =
    ((currentQuestion + 1) / questions.length * 100) + "%";

  nextBtn.classList.remove("hidden");
  retryBtn.classList.add("hidden");
}


function selectAnswer(button, index) {
  if (selected) return;

  selected = true;

  const correct = questions[currentQuestion].answer;
  const allChoices = document.querySelectorAll(".choice");

  allChoices.forEach(choice => {
    choice.disabled = true;

    if (Number(choice.dataset.index) === correct) {
      choice.classList.add("correct");
    }
  });

  if (index === correct) {
    score++;
    button.classList.add("correct");
    feedback.textContent = "Correct! Great job. ✓";
  } else {
    button.classList.add("wrong");
    feedback.textContent = "Not quite. The correct answer is highlighted.";
  }
}


nextBtn.addEventListener("click", () => {
  if (!selected) {
    feedback.textContent = "Please choose an answer first.";
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});


function showResult() {
  questionNumber.textContent = "QUIZ COMPLETE";

  questionText.textContent =
    "You scored " + score + " out of " + questions.length + "!";

  choicesBox.innerHTML = "";

  let message = "";

  if (score === questions.length) {
    message = "Excellent! You got a perfect score. 🎉";
  } else if (score >= 6) {
    message = "Great work! You understand the main concepts. 👏";
  } else if (score >= 4) {
    message = "Good effort! Review the lessons and try again.";
  } else {
    message = "Keep learning! Review the sections and try the quiz again.";
  }

  feedback.textContent = message;

  nextBtn.classList.add("hidden");
  retryBtn.classList.remove("hidden");

  progressBar.style.width = "100%";
  progressText.textContent = "Finished • Score: " + score + "/" + questions.length;
}


retryBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
});


const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


loadQuestion();
