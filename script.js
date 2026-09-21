// CLJ 1 - BSCRIM Block A3

document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling for navigation links
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


  // Add a small effect when a topic is opened
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


  // Current year in the console
  console.log(
    "CLJ 1 Website - BSCRIM I Block A3"
  );

});