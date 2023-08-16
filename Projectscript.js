"use strict";

const visitLink = document.querySelectorAll(".visitLink");
const visible = document.querySelector(".visible");
const cards = document.querySelectorAll(".cards");
const SeeMoreButton = document.querySelector(".seeMore");
const card7 = document.querySelector(".card--7");
const card8 = document.querySelector(".card--8");

// Mouse hover on cards
cards.forEach((card, index) => {
  card.addEventListener("mouseover", function () {
    visitLink[index].classList.toggle("visible");
    card.style.borderRadius = "20px";
    // console.log(card);
  });
});

cards.forEach((card, index) => {
  card.addEventListener("mouseleave", function () {
    visitLink[index].classList.toggle("visible");
    card.style.borderRadius = "0px";
  });
});
// mouse hover on card done

// Hide and display cards when see more button is clicked
document.addEventListener("DOMContentLoaded", function () {
  SeeMoreButton.addEventListener("click", function () {
    card7.style.display = card7.style.display === "none" ? "flex" : "none";
    card8.style.display = card8.style.display === "none" ? "flex" : "none";
    if (card7.style.display === "flex" && card8.style.display === "flex") {
      SeeMoreButton.textContent = "Hide";
    } else {
      SeeMoreButton.textContent = "See More";
    }
    console.log(SeeMoreButton);
  });
});
