import "./styles.css";
import home from "./home.js";
import about from "./about.js";
import menu from "./menu.js";

console.log("initialize...");

document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutButton = document.getElementById('about');

    home();

    homeButton.addEventListener("click", home);
    menuButton.addEventListener("click", menu);
    aboutButton.addEventListener("click", about);
});