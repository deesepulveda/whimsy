"use strict";

const sideLiDrivers = document.querySelector(".side_li_items_drivers");
const driversUl = document.querySelector(".drivers_ul");

sideLiDrivers.addEventListener("click", () => {
  driversUl.classList.add("showList");
});
