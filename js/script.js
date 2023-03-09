"use strict";

const body = document.querySelector("body");

const navigation = document.querySelector(".nav");
const navigationLinks = document.querySelectorAll(".nav-link");
const menuIcons = document.querySelectorAll(".menu-icon");

const container = document.querySelector(".hero");
const before = window.getComputedStyle(container, "::before");
const image = document.querySelector(".hero-img");

const openNav = function () {
  for (const icon of menuIcons) {
    icon.classList.toggle("menu-icon-active");
  }

  navigation.classList.toggle("nav-open");

  body.classList.toggle("hide-over");
};
for (const link of navigationLinks) {
  link.addEventListener("click", openNav);
}

function setBeforeTop() {
  container.style.setProperty("--top", `${image.clientHeight}px`);
}

window.addEventListener("resize", setBeforeTop);
setBeforeTop();
