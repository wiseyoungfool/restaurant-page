import "./styles.css";
import home from "./home.js";
import about from "./about.js";
import menu from "./menu.js";

console.log("initialize...");

document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.querySelector('.home-btn');
    const menuButton = document.querySelector('.menu-btn');
    const aboutButton = document.querySelector('.about-btn');

    home();

    homeButton.addEventListener("click", home);
    menuButton.addEventListener("click", menu);
    aboutButton.addEventListener("click", about);
});