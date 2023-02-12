"use strict";

const sideLiDrivers = document.querySelector(".side_li_items_drivers");
const driversUl = document.querySelector(".drivers_ul");
const sideLi = document.querySelectorAll(".side_li_items");

sideLiDrivers.addEventListener("click", () => {
  driversUl.classList.add("showList");
});

sideLi.forEach((si) => {
  si.addEventListener("click", () => {
    console.log("Clicked");
  });
});
