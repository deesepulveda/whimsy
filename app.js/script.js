"use strict";

const sideLiDrivers = document.querySelector(".side_li_items_drivers");
const driversDash = document.querySelector(".drivers_dashboard");
const sideLi = document.querySelectorAll(".side_li");
const dashBoard = document.querySelectorAll(".dashboard");

sideLi.forEach((si) => {
  si.addEventListener("click", () => {
    let current = "";
    current = si.getAttribute("id");

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
