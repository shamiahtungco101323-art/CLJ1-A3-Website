// CLJ 1 - BSCRIM Block A3

document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // SMOOTH SCROLLING
  // =========================

  const links = document.querySelectorAll("nav a");

  links.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const target = document.querySelector(
        this.getAttribute("href")
      );

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });


  // =========================
  // TOPIC OPEN EFFECT
  // =========================

  const topics = document.querySelectorAll(".topic");

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
   