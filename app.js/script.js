"use strict";

const sideLiDrivers = document.querySelector(".side_li_items_drivers");
const driversDash = document.querySelector(".drivers_dashboard");
const sideLi = document.querySelectorAll(".side_li");
const dashBoard = document.querySelectorAll(".dashboard");
const cards = document.querySelector(".cards");

// Side Menu List Functions

sideLi.forEach((si) => {
  si.addEventListener("click", () => {
    let current = "";
    current = si.getAttribute("id");

    // Target Dashboards after Side List Clicked
    dashBoard.forEach((db) => {
      if (db.classList.contains(current)) {
        db.classList.remove("hideList");
        db.classList.add("showList");
      } else {
        db.classList.add("hideList");
      }
    });
  });
});

// cards.addEventListener("click", () => {
//   cards.classList.toggle("acresYard");
// });
